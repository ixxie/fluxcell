{ config, pkgs, ... }:

{
  users.users.anmatika = {
        extraGroups = [
            "wheel"
            "networkmanager"
            "docker"
        ];
        isNormalUser = true;
        openssh.authorizedKeys.keys = [
          "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDXiWmq3IpbnAv7+zNPWYlQCpbVSxUWSptxFLP1cRvS1Wj6ftwAlLJw+FHSIK7MoO2Z0k79yPw0c2ebjpf+ogF6Umf2/Mney8XnIKPjW8kXXRuxVpG6+444PJtGtBP8AwHI+I+TfENclTi2oaubljbWEmJeHQZt/z/ZcmlXnztmMjF4ohmcQ3scq1nkHMvzajfFHfl6X93ZWJTob3X1Ryq5sP7WpJ2qrROsuV77vC5WiUTJQo2YjrU+KHKxUsrjgQrxXpsgO30uCbgjLLf++A2GopqN+fqYZVzz3zDOaX2LlxahMbvMWO4H29a+q6VrXc4TRMywMvubthFXwnEMXFtF antti@archer"

          "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDh8Prv5exr0JAQhurz+8adShuDFj9D7v7BLTmuWFDvHl7NKjVwVTOklKZFjDt26iG0eaSQjfve+M0ejd7Acml6yoypCVeFTMWb1tzDaNKETNj5+0Q2swyt1vKdcDtH4TBdqgYPghO8WvVg8dNOvMu5aoURM5jrnvp6wLclRSuV8LPpdcRGIpJwoR1SWXFmlH6eQaXR5KzFJGONDoyXA6iJDnPuVnUFg/WmxOWk6NBlqgevp2s3YVxtvfLQrLCI3wL8dxLh4HUOzMMjsErAWQzh2gGQjCIVH9GMap069lrV8t495RKGK+Zr6dPEjX8xJE2HldWu25qCWYPDOvftr21E/ruuNySiSyNbXsXPgKD3g8ZwjukTzOaYH9G/5HrRqi6HGj00pNrW2lMUQhLmmxpmp3lJOpl+8wVUZ6swZ+/KbOC34OgoQHx0rsKRgpyeLEgVrmf6/RnTK5Gvrdr3Nkt373WpARRNDx08LmG4PI/pVxCVEe8FHm2nYYnPIEssoTzx2S8YuWngPzzeWawoKLK7JAy00iN0eL44PLe4/F9fYyBd+7w6tn0D4vTMwzAKWph3TzTC+ik4J0XrkWDl3LqD7xmqNOVSgdFc3oo1dB+7DR6IMi+eVBzBtcgElw93KfoUYaDvqmZsPlKyOCLJ/wvL5oLraKRExxr8bc6sw2nXow== anttim@Sievo065"
        ];
  };
}
