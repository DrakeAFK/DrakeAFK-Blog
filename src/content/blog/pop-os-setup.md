---
author: DrakeAFK
pubDatetime: 2024-01-28T05:10:00Z
title: My Pop!_OS Setup
postSlug: pop-os-setup
featured: true
draft: false
tags:
  - pop!_os
  - linux
  - setup
ogImage: ""
description: This is how I setup Pop!_OS for development and daily use
---

![Pop!_OS Penguin](@assets/images/pop_os-penguin-min.png)

# Pop!\_OS Setup

This is how I setup Pop!\_OS for software development and personal use.

For reference, I primarily use this setup on a Lenovo ThinkPad T14 Gen 1 (AMD) laptop.

**Notes**
Current Version for this setup: `Pop!_OS 22.04 LTS`

Certain commands are catered to the hardware of my laptop. Please modify the commands to your needs.

- e.g. Installing Brave: `arch=amd64`

All settings are more of a personal preference and some are only applicable for a laptop.

_If you are new to Linux, I recommend reading through the commands and understanding what each command does before running them. The Linux community is very helpful, so if you have any questions, please ask!_

---

__General Settings__

- Tile windows
- Enable night light
- Change device name
- Manage installed languages
  - Remove unwanted languages
- Turn off file history
- Enable automatic trash & temporary file cleanup
- Disable sleep & display timeout
- Show seconds in system clock
  - `gsettings set org.gnome.desktop.interface clock-show-seconds true`
- Show week numbers in calendar
  - `gsettings set org.gnome.desktop.calendar show-weekdate true`
- Laptop Only
  - Touchpad
    - Enable natural scrolling
    - Disable tap to click
    - Disable while typing
  - Show battery percentage
  - Disable suspend when lid is closed
    - `cd /etc/systemd/`
    - `sudo nano logind.conf`
    - Uncomment and set `HandleLidSwitch=ignore`

---

__Install & Configure Software__

- Update system
  - `sudo apt update && sudo apt upgrade -y`
  - `sudo apt autoremove -y`
  - `sudo apt autoclean`
  - `sudo reboot now`


- [Alacritty](https://github.com/alacritty/alacritty)
  - Download from Pop!_Shop
  - Download `.yml` from GitHub
  - `mkdir ~/.config/alacritty`
  - `mv ~/Downloads/alacritty.yml ~/.config/alacritty/alacritty.yml`


- [ZSH](https://zsh.org) & [Oh-My-Zsh](https://github.com/ohmyzsh/ohmyzsh)
  - `sudo apt install zsh`
  - `chsh -s $(which zsh)`
  - `sudo apt reboot now`
  - Open new terminal
    - `0`
  - `sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`
  - Restart terminal
  - `git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions`
  - `sudo nano ~/.zshrc`
    - `plugins=(git zsh-autosuggestions)`


- [Brave Browser](https://brave.com/)
  - `sudo curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg`
  - `echo "deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main" | sudo tee /etc/apt/sources.list.d/brave-browser-release.list`
  - `sudo apt update`
  - `sudo apt install brave-browser`
  - Set Brave as default browser in Settings


- [VS Code](https://code.visualstudio.com/)
  - [Download .deb file](https://code.visualstudio.com/Download)
  - Install with Eddy


- [Git](https://git-scm.com/)
  - `git config --global user.name "Your Name"`
  - `git config --global user.email "your@email.com"`
  - `git config --global init.defaultBranch master`
  - `ssh-keygen -t ed25519 -C "your@email.com"`
  - `eval "$(ssh-agent -s)"`
  - `ssh-add ~/.ssh/id_rsa`
  - `cat ~/.ssh/id_rsa.pub`
    - Copy key and paste into GitHub SSH Key settings
  - `ssh -T git@github.com`
    - `yes`


- [Rust](https://github.com/rust-lang/rust)
  - `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
  - `1`
  - Restart terminal


- [Python](https://www.python.org/)
  - `sudo apt install python3-pip`
  - `sudo apt install python3-venv`


- [NVM](https://github.com/nvm-sh/nvm) & [NodeJS](https://nodejs.org/en) & [NPM](https://www.npmjs.com/)
  - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
  - Restart terminal
  - `nvm install v20.11.0`
  - Check install
    - `node --version`
    - `npm --version`


- [Neovim](https://github.com/neovim/neovim)
  - `sudo apt install ninja-build gettext cmake unzip`
  - `git clone https://github.com/neovim/neovim`
  - `cd neovim`
  - `git checkout v0.9.5`
  - `make CMAKE_BUILD_TYPE=RelWithDebInfo`
  - `cd build`
  - `cpack -G DEB`
  - `sudo dpkg -i nvim-0.9.5-Linux.deb`


- [Nerd Fonts](https://www.nerdfonts.com/) _(I use JetBrainsMono Nerd Font)_
  - Download `.zip` from website
  - `cd ~/Downloads`
  - `unzip JetBrainsMono.zip -d 3270`
  - `cd 3270`
  - `sudo mv -vf *.ttf /usr/local/share/fonts/`
  - `cd ..`
  - `rm -rf *`
  - `nano ~/.config/alacritty/alacritty.yml`
    - `font:`
      - `normal:`
        - `family: JetBrainsMono Nerd Font`
        - `style: Regular`
      - `bold:`
        - `family: JetBrainsMono Nerd Font`
        - `style: Bold`


- [Lazyvim](https://www.lazyvim.org/)
  - `git clone https://github.com/LazyVim/starter ~/.config/nvim`
  - `rm -rf ~/.config/nvim/.git`
  - `nvim`


- [Neofetch](https://github.com/dylanaraps/neofetch)
  - `sudo apt install neofetch`


- [GIMP](https://www.gimp.org/)
  - `sudo apt install gimp`


- [OBS Studio](https://obsproject.com/)
  - `sudo apt install ffmpeg obs-studio`


- [Obsidian.md](https://obsidian.md/)
  - [Download .deb file](https://obsidian.md/download)
  - Install with Eddy


---

__Finishing Touches__

- `sudo apt update && sudo apt upgrade -y`
- `sudo apt autoremove -y`
- `sudo apt autoclean`
- `sudo reboot now`

