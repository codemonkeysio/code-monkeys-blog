---
title: Configuring Settings
date: 2022-12-20T15:02:00.000Z
topic: Raspberry-Pi
description: Hey fellow Code Monkeys!!! 🐵 If you're interested in learning how to configure the settings for your Raspberry Pi, then check out the Configuring Settings post! 🍌🐒
preview: In this tutorial we're going to learn how to configure various settings for a Raspberry Pi using standard Debian commands...
img: raspberry-pi/01-configuring-settings/raspberry-pi-configuring-settings-post.png
placeholder: raspberry-pi/01-configuring-settings/raspberry-pi-configuring-settings-post-90w.png
alt: Raspberry Pi - Configuring Settings Post Picture
linkImg: raspberry-pi/01-configuring-settings/raspberry-pi-configuring-settings-post-link.png
linkImgAlt: Raspberry Pi - Configuring Settings Image
canonicalUrl: raspberry-pi-configuring-settings/
---

::: slot header

# Configuring Settings

:::

## What We're Doing

In this tutorial we're going to learn how to configure various settings for a [Raspberry Pi](https://www.raspberrypi.com/) using standard [Debian](https://www.debian.org/) commands. Since we'll be using standard Debian commands, the commands will be compatible with most other hardware platforms running Debian.

Instead of using the standard Debian commands to configure the settings, you can preconfigure the settings with the [Raspberry Pi Imager](https://github.com/raspberrypi/rpi-imager) by using the advanced options when installing the [Raspberry Pi OS](https://www.raspberrypi.com/software/operating-systems/). You also have the option to use the [raspi-config](https://www.raspberrypi.com/documentation/computers/configuration.html) tool to configure the settings.

If you preconfigure the settings using the Raspberry Pi Imager, you can always update them later by using either the raspi-config tool or the standard Debian commands discussed in this post.

:::tip Raspberry Pi Imager Boot Issues
If you're having issues booting your Raspberry Pi after preconfiguring the settings using the Raspberry Pi Imager, then don't preconfigure the settings. Instead you can use the raspi-config tool or the standard Debian commands to configure the settings after booting into the Raspberry Pi.
:::

We'll be configuring the following settings:

- Username
- Password
- Secure Shell (SSH)
- WiFi
- Time Zone
- Keyboard Layout

We'll be using the <code class="inline-code-block">nano</code> text editor to edit the configuration files.

Here's how to save and exit <code class="inline-code-block">nano</code>:

- Save: press <code class="inline-code-block">Ctrl+o</code>, confirm the filename, and press the <code class="inline-code-block">Enter</code> key
- Exit: press <code class="inline-code-block">Ctrl+x</code>

## Assumptions

We're making the following assumptions:

- You're using a <span class="external-link-wrap">[Raspberry Pi 4](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/)</span> running Raspberry Pi OS Lite (64-bit)
- You're using an official <span class="external-link-wrap">[Raspberry Pi Power Supply](https://www.raspberrypi.com/products/type-c-power-supply/)</span>
- The Raspberry Pi is connected to a display either a computer monitor or television
- You have a USB keyboard plugged into the Raspberry Pi

## Username

There are multiple ways to update your username. We'll be updating the username by logging in as the <code class="inline-code-block">root</code> user. Instead of using the <code class="inline-code-block">root</code> user, it's also possible to create another user and log into it to update the username.

:::tip Don't Use pi for your Username
For security reasons it's recommended to not use <code class="inline-code-block">pi</code> as your username since it has been used in the past as the default username. Potential hackers have a list of commonly used usernames which may include the <code class="inline-code-block">pi</code> username.
:::

### Enable root User

To update the username using the <code class="inline-code-block">root</code> user, you first need to enable it which you can do by running the following command:

<code-group>
<code-block title="Enable root User">
```sh
sudo passwd root
```
</code-block>
</code-group>

Be sure to choose a secure password for the <code class="inline-code-block">root</code> user. You can use a password mananger like [KeePass](https://keepass.info/) or [Bitwarden](https://bitwarden.com/) to generate and store your passwords.

:::tip Disabling the root User
You can also disable the <code class="inline-code-block">root</code> user if you want after updating the username which we'll demonstrate below. For security reasons it's recommended to disable the <code class="inline-code-block">root</code> user after updating the username.
:::

### Logout

After enabling the <code class="inline-code-block">root</code> user, you need to log out of the current user which you can do with the following command:

<code-group>
<code-block title="Logout">
```sh
logout
```
</code-block>
</code-group>

### Update Username

Now, you'll need to log in using the <code class="inline-code-block">root</code> user by entering <code class="inline-code-block">root</code> for the username and the password you just created for the <code class="inline-code-block">root</code> user.

After logging in as the <code class="inline-code-block">root</code> user, you're now ready to update the username by running the following command:

<code-group>
<code-block title="Update Username">
```sh
usermod -l <new_username> <old_username>
```
</code-block>
</code-group>

Be sure to replace:

- <code class="inline-code-block"><new_username></code> with the updated username
- <code class="inline-code-block"><old_username></code> with the username you want to update

### Update home Directory

The username has been updated, but the user's <code class="inline-code-block">home</code> directory will still be using the previous username. To update the <code class="inline-code-block">home</code> directory to reflect the updated username you need to run the following command:

<code-group>
<code-block title="Update home Directory">
```sh
usermod -m -d /home/<new_username> <new_username>
```
</code-block>
</code-group>

Be sure to replace:

- <code class="inline-code-block"><new_username></code> with the updated username

You can now log out of the <code class="inline-code-block">root</code> user by running the <code class="inline-code-block">logout</code> command we used earlier, and log in using the updated username and the user's password.

### Disable root User

You can now disable the <code class="inline-code-block">root</code> user if you want, but you'll first want to make sure the updated user still has <code class="inline-code-block">sudo</code> privileges. You can check this by running the following command:

<code-group>
<code-block title="Check sudo Privileges">
```sh
groups <new_username>
```
</code-block>
</code-group>

Be sure to replace:

- <code class="inline-code-block"><new_username></code> with the updated username

If the user still has <code class="inline-code-block">sudo</code> privileges, you should see the <code class="inline-code-block">sudo</code> group in the output.

After confirming the updated user still has <code class="inline-code-block">sudo</code> privileges, you can disable the <code class="inline-code-block">root</code> user by running the following command:

<code-group>
<code-block title="Disable root User">
```sh
sudo passwd -l root
```
</code-block>
</code-group>

## Password

To update the password for your user you can run the following command:

<code-group>
<code-block title="Update Password">
```sh
passwd
```
</code-block>
</code-group>

You will need to enter the current password for the user. Then you will be asked to enter the updated password and to re-enter the updated password.

Be sure to choose a secure password for your user. You can again use a password mananger like [KeePass](https://keepass.info/) or [Bitwarden](https://bitwarden.com/) to generate and store your passwords.

:::tip Don't Use raspberry for your Password
It's recommended to not use <code class="inline-code-block">raspberry</code> as your password since it has been used in the past as the default password plus it isn't a secure password anyway.
:::

## Hostname

Every Raspberry Pi using Raspberry Pi OS Lite (64-bit) uses the default hostname <code class="inline-code-block">raspberrypi</code> which isn't very helpful when you're using multiple Raspberry Pi devices that you're trying to distinguish between on your network.

:::tip hostname Restrictions
The hostname may contain lowercase letters 'a' through 'z', uppercase letters 'A' through 'Z', numbers '0' through '9', and hyphens '-' as long as the first and last characters aren't hyphens. No other symbols, punctuation characters, or white space are allowed in the hostname.
:::

### hosts File

To update the hostname you can open the <code class="inline-code-block">/etc/hosts</code> file by running the following command:

<code-group>
<code-block title="Open hosts File">
```sh
sudo nano /etc/hosts
```
</code-block>
</code-group>

Your <code class="inline-code-block">hosts</code> file should look something like this:

<code-group>
<code-block title="hosts File">
```{6}
127.0.0.1       localhost
::1             localhost ip6-localhost ip6-loopback
ff02::1         ip6-allnodes
ff02::2         ip6-allrouters

127.0.1.1       <old_hostname>
```
</code-block>
</code-group>

Be sure to replace:

- <code class="inline-code-block"><old_hostname></code> with the updated hostname

Then save and exit the file.

### hostname File

Next you need to open the <code class="inline-code-block">/etc/hostname</code> file by running the following command:

<code-group>
<code-block title="Open hostname File">
```sh
sudo nano /etc/hostname
```
</code-block>
</code-group>

Your <code class="inline-code-block">hostname</code> file should look something like this:

<code-group>
<code-block title="hostname File">
```
<old_hostname>
```
</code-block>
</code-group>

Be sure to replace:

- <code class="inline-code-block"><old_hostname></code> with the updated hostname

Then save and exit the file.

For the changes to take effect you need to reboot your Raspberry Pi which you can do by running the following command:

<code-group>
<code-block title="Reboot">
```
sudo reboot
```
</code-block>
</code-group>

After rebooting the command prompt should now display, <code class="inline-code-block">\<username>@<new_hostname></code>.

Where:

- <code class="inline-code-block">\<username></code> is the username of the current user
- <code class="inline-code-block"><new_hostname></code> is the updated hostname

## Enable and Start SSH

Secure Shell (SSH) is a network communication protocol that enables you to connect securely to a remote computer or a server by using a text-based interface. When a secure SSH connection is established, a shell session is started, and you'll be able to manipulate the server by typing commands from your local computer.

If you want to remotely connect to your Raspberry Pi, i.e., be able to access it from your local computer, then you'll need to enable and start the SSH service on the Raspberry Pi.

### Enable SSH

To enable SSH run the following command:

<code-group>
<code-block title="Enable SSH">
```
sudo systemctl enable ssh
```
</code-block>
</code-group>

### Start SSH

To start the SSH service run the following command:

<code-group>
<code-block title="Start SSH">
```
sudo systemctl start ssh
```
</code-block>
</code-group>

You should now be able to SSH into the Raspberry Pi from your local computer.

## Configure WiFi

To configure WiFi you need to edit the <code class="inline-code-block">wpa_supplicant.conf</code> file.

### wpa_supplicant.conf

The <code class="inline-code-block">wpa_supplicant.conf</code> file should be located in the <code class="inline-code-block">/etc/wpa_supplicant</code> directory.

To open the <code class="inline-code-block">wpa_supplicant.conf</code> file you can run the following command:

<code-group>
<code-block title="Open wpa_supplicant.conf">
```
sudo nano /etc/wpa_supplicant/wpa_supplicant.conf
```
</code-block>
</code-group>

After editing the file, it should look like this:

<code-group>
<code-block title="wpa_supplicant.conf File">
```{3,6-7}
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=<country_code>

network={
     ssid="<ssid>"
     psk="<password>"
     scan_ssid=1
}
```
</code-block>
</code-group>

Be sure to replace:

- <code class="inline-code-block"><country_code></code> with your own <span class="external-link-wrap">[country code](https://www.iban.com/country-codes)</span>
- <code class="inline-code-block">\<ssid></code> with your WiFi SSID, i.e., the name of your WiFi
- <code class="inline-code-block">\<password></code> with your WiFi password

Then save and exit the file.

For the changes to take effect you need to reboot your Raspberry Pi which you can do by running the following command:

<code-group>
<code-block title="Reboot">
```
sudo reboot
```
</code-block>
</code-group>

### Unblock WiFi

If you get the following message after rebooting:

<code-group>
<code-block title="Wi-Fi Currently Blocked Message">
```
Wi-Fi is currently blocked by rfkill.
Use raspi-config to set the country before use.
```
</code-block>
</code-group>

Then you can run the following command to unblock the WiFi;

<code-group>
<code-block title="Unblock WiFi Using raspi-config">
```
sudo raspi-config nonint do_wifi_country <country_code>
```
</code-block>
</code-group>

Be sure to replace:

- <code class="inline-code-block"><country_code></code> with your own <span class="external-link-wrap">[country code](https://www.iban.com/country-codes)</span>

Instead of using <code class="inline-code-block">raspi-config</code> to unblock the WiFi which isn't a standard Debian command, you can also try installing and running <code class="inline-code-block">urfkill</code>.

Run the following command to install <code class="inline-code-block">urfkill</code>:

<code-group>
<code-block title="Install urfkill">
```
sudo apt install urfkill
```
</code-block>
</code-group>

To unblock the WiFi using <code class="inline-code-block">urfkill</code> run the following command:

<code-group>
<code-block title="Unblock WiFi Using urfkill">
```
sudo unblock wifi
```
</code-block>
</code-group>

### Test Connection

To test the WiFi connection you can check the IP address by running the following command:

<code-group>
<code-block title="Check IP Address">
```
hostname -I
```
</code-block>
</code-group>

## Locale Settings

We're now going to go over how to update the time zone and keyboard layout locale settings.

### Time Zone

You can check the current time zone by running the following command:

<code-group>
<code-block title="Check Time Zone">
```
ls -l /etc/localtime
```
</code-block>
</code-group>

To update the time zone you can run the following command:

<code-group>
<code-block title="Update Time Zone">
```
sudo timedatectl set-timezone <area>/<location>
```
</code-block>
</code-group>

Be sure to replace:

- <code class="inline-code-block">\<area></code> with your own area
- <code class="inline-code-block">\<location></code> with your own location

If you're unsure what your area and location are, then take a look at the [list of tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

### Keyboard Layout

To update the keyboard layout you can edit the <code class="inline-code-block">keyboard</code> file which is located in the <code class="inline-code-block">/etc/default</code> directory.

To open the <code class="inline-code-block">keyboard</code> file you can run the following command:

<code-group>
<code-block title="Open keyboard">
```
sudo nano /etc/default/keyboard
```
</code-block>
</code-group>

After editing the file, it should look like this:

<code-group>
<code-block title="keyboard File">
```{6}
# KEYBOARD CONFIGURATION FILE

# Consult the keyboard(5) manual page.

XKBMODEL="pc105"
XKBLAYOUT="<layout>"
XKBVARIANT=""
XKBOPTIONS=""

BACKSPACE="guess"
```
</code-block>
</code-group>

Be sure to replace:

- <code class="inline-code-block">\<layout></code> with your preferred keyboard layout, e.g., <code class="inline-code-block">us</code>

Then save and exit the file.

The value for the keyboard layout is typically the two character [country code](https://www.iban.com/country-codes).

After updating the time zone and keyboard layout locale settings, you need to reboot your Raspberry Pi to see the changes take effect which you can do by running the following command:

<code-group>
<code-block title="Reboot">
```
sudo reboot
```
</code-block>
</code-group>

## Conclusion

After following only with this tutorial, you should now know how to configure various settings for your Raspberry Pi using standard Debian commands.
