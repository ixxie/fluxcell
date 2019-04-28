{ config, pkgs, ... }:

{
  imports = [
    ./anmatika.nix
    ./ixxie.nix
    ./tvierro2.nix
  ];

  users.groups = {
    devs = {
      members = [
        "ixxie"
        "anmatika"
        "tvierro2"
      ];
    };
  };
}
