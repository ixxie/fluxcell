#!/usr/bin/env bash

# Script to use Clever's kexec method to install NixOS on a Hetzner Cloud VM

#############
# Arguments #
#############

name=$1
target=$2

##############
# Parameters #
##############

# SSH
noCheck='StrictHostKeyChecking=no' 
noSave='UserKnownHostsFile=/dev/null'
logLvl='LogLevel=ERROR'

# Styling
color='\e[208m'
default='\e[39m'

openTitle="<<${color}"
closeTitle="${default}>>"

####################
# Helper Functions #
####################

# printing

phase () {
  title=$1
  printf "\n${openTitle}${title}${closeTitle}\n\n"
}

step () {
  text=$1
  printf "  ${text}\n\n"
}

# ssh

run () {
    ssh \
      -o "${noCheck}" \
      -o "${noSave}"  \
      -o "${logLvl}"  \
      root@"${target}" $1
}

upload () {
    scp \
      -o "${noCheck}" \
      -o "${noSave}"  \
      -o "${logLvl}"  \
      $1 root@"${target}":$2
}

download () {
    scp \
      -o "${noCheck}" \
      -o "${noSave}"  \
      -o "${logLvl}"  \
      root@"${target}":$1 $2
}

# checks

getOS () {
  host=$1
  OS=$(
    ssh -o "${noCheck}" -o "${noSave}" -o "${logLvl}" root@"${host}" '
      source /etc/os-release 
      echo ${NAME}
    ')
  echo "${OS}"
}

isUp () {
  host=$1
  if timeout 1 nc -z "${target}" 22 &> /dev/null; then
    return 0
  else
    return 1
  fi
}

isNixOS () {
  host=$1
  OS=$(getOS ${host})
  if [[ ${OS} = "NixOS" ]]; then
    return 0 
  else
    return 1
  fi
}

isReady () {
  host=$1
  if isUp "${host}"; then
    if isNixOS "${host}"; then
      return 0
    else
      return 1
    fi
  else
    return 2
  fi  
}

##########
# Script #
##########

phase 'Formatting disk & generating configuration'
run '
  mkfs.ext4 -F /dev/sda1;
  mount /dev/sda1 /mnt;
  nixos-generate-config --root /mnt;
'

phase 'Copying temporary configuration to target'
upload ./temp-config.nix /mnt/etc/nixos/configuration.nix

phase 'Installing NixOS'
run '
  nixos-install;
  reboot;
'

phase 'Waiting target to come back online'
sleep 1
while ! isReady "${target}";
do
  printf '.'
  sleep 0.5
done
step 'Target back online!'

phase 'Downloading hardware configuration'
download /etc/nixos/hardware-configuration.nix ../hardware/"${name}".nix

exit 0
