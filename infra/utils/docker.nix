{ config, pkgs, ... }:

{

  # docker
  environment = {
    systemPackages = with pkgs; [
      docker
      docker_compose
    ];
  };

  virtualisation.docker.enable = true;
  
}
