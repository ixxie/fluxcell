{ config, pkgs, ... }:

{
  imports = [ ./common.nix ];

  # roles
  services.kubernetes.roles = [ "master" "node" ];

  # wrapper around kubectl with access to admin config
  environment.systemPackages = with pkgs;
  let
    kubectl = runCommand "wrap-kubectl" { buildInputs = [ makeWrapper ]; } ''
      mkdir -p $out/bin
      makeWrapper ${pkgs.kubectl}/bin/kubectl $out/bin/kubectl \
      --set KUBECONFIG "/etc/${config.services.kubernetes.pki.etcClusterAdminKubeconfig}"
    '';
  in
  [
    kubectl
    dex-oidc
  ];

  networking.firewall.allowedTCPPorts = [
    6443 # kube apiserver
    8888 # cfssl
    2379 # etcd
    10250 # kubelet
  ];

}
