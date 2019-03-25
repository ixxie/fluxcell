{

  flux-master = { config, pkgs, ... }: {
    imports = [
      ./hardware/master.nix
      ./utils/base.nix
      ./kube/master.nix
      ./users
    ];
    config = {
      deployment = {
        targetHost = "95.216.166.39";
        targetEnv = "none";
      };
    };
  };

  flux-dev = { config, pkgs, ... }: {
    imports = [
      ./hardware/dev.nix
      ./utils/base.nix
      ./utils/docker.nix
      ./users
    ];
    config = {
      deployment = {
        targetHost = "95.216.165.250";
        targetEnv = "none";
      };
    };
  };

}
