{ config, pkgs, ... }:

{
  users.users.tvierro2 = {
        extraGroups = [
            "wheel"
            "networkmanager"
            "docker"
        ];
        isNormalUser = true;
        openssh.authorizedKeys.keys = [
          "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCkNVcfonGzG1xkntI0X7Dch+KuqaKrKl4j7+7m+hXTbXm6V0LtPMf+YutmFSgg6Yuv01eAPP42gK05/kIEWWNIDYCT1YjXn0QA6zytEZj1UTQASE5/gVIg96rZOWrcUAzsETbqtubeq8Gou1LcDLMqRB4uq6nkBfOuP8tVdAGMnNdU/iS8sX7pzuCNMzf902sjNAF46XkqmUHZ+4TT2f/hMUjayl70GPxMH1l7UXQ7VzIi0xzo+k0arICng3520oJ2ym336hkWD2uZ00eSeUANv8otJXqfsWs5deqeMcwmYccTw0QMpGDKQh0rEIHFGpEyfLZY6iwFaOsTtkiwHybp tuomo@tuomo-desktop"
        ];
  };
}
