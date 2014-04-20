## xampp(lampp) ##
- Start xampp(lampp) : `sudo /opt/lampp/lampp start`
- Restart xampp(lampp) : `sudo /opt/lampp/lampp restart`
- set password xampp(lampp) : `sudo /opt/lampp/lampp security`

## Laravel ##
- <b>To change any folder path in Ubuntu</b>: `sudo chmod -R o+w /usr/local/bin`
- <b>Link to dev folder to lampp</b>:  
  `@rajat:/opt/lampp/htdocs$ sudo ln -s /home/rajat/public_html/ rajat`. 
  - First go to `/opt/lampp/htdocs` and create link your dev folder `/home/rajat/public_html/` as `rajat`
  - As a result `/home/rajat/public_html/project_xyz` will be accessible as `http://localhost/rajat/project_xyz/`
- for changing storage directory run `sudo chmod -R 777 app/storage/` going to laravel project folder  


## Install ##
- <b>VLC Media Player</b> :   
```
sudo apt-get update & sudo apt-get install vlc
```
- <b>xampp</b> : 
```
sudo add-apt-repository ppa:upubuntu-com/xampp  
sudo apt-get update 
sudo apt-get install xampp
```
- <b>Flash Player</b> : 
```
sudo add-apt-repository "deb http://archive.canonical.com/ $(lsb_release -sc) partner"
sudo apt-get update && sudo apt-get install flashplugin-installer
sudo apt-get install ubuntu-restricted-extras
```  
- <b>lubuntu theme</b> :   
`sudo apt-get install lubuntu-desktop` or for only one theme `sudo apt-get install lxde`. After install goto login screen and select theme icon and choose `lubuntu`
- <b>Partition manager</b> :  
```
sudo apt-get install gparted
```
- <b>Sublime text 2</b>:
```
sudo add-apt-repository ppa:webupd8team/sublime-text-2
sudo apt-get update
sudo apt-get install sublime-text
```
- <b>Curl and git</b>:  
```
sudo apt-get install curl git -y
```
- <b>Install PHP-cli</b>:  
```
sudo apt-get install php5-cli
```
- <b>composer (dependency manager)</b>:  
  Goto any writable folder like `/var/www` and execute these commands
```
curl -sS https://getcomposer.org/installer | php
mv -v composer.phar /usr/local/bin/composer
```
- <b>Install Laravel latest version</b>:  
  - Goto dev folder and run this command to install laravel in `laravel-test` folder in dev folder
```
composer create-project laravel/laravel laravel-test
```

NB: 
- http://rakesh.tembhurne.com/notes-on-setting-lamp-environment-for-web-development-on-ubuntu/
- http://www.rosehosting.com/blog/how-to-install-laravel-4-with-twitter-bootstrap-on-linux-vps/
