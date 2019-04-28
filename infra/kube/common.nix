{ config, pkgs, ... }: with pkgs.lib;

let
  cluster = {
    flux-master = "95.216.148.19";
  };
in
{
  services.kubernetes = {
    easyCerts = true;
    masterAddress = "flux-master";
    addons.dashboard.enable = true;
  };

  # flannel
  services.flannel.network = "10.2.0.0/16";
  networking.firewall = {
    enable = true;
    trustedInterfaces = ["flannel.1"];
  };

  # add cluster to known hosts
  networking.extraHosts =
    let
      trueIP = host: ip: if host == config.networking.hostName then "127.0.0.1" else ip;
    in
      concatStringsSep "\n" (mapAttrsToList (host: ip: "${trueIP host ip} ${host}") cluster);

} 
