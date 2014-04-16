Problem: 
  Want to create a virtual host named `www.laravelDemo.dev` from my dev location `E:/Work/rajat/Laravel_My_First_App` using xampp.

Solution:
-Step 1: Find `C:\xampp\apache\conf\extra\httpd-vhosts.conf` file and open in editor. Change the following:
```
<VirtualHost 127.0.0.2:80>
    DocumentRoot "E:/Work/rajat/Laravel_My_First_App/public"
    ServerName www.laraveldemo.dev
    ErrorLog "logs/www.laraveldemo.dev-error.log"
    CustomLog "logs/www.laraveldemo.dev-access.log" common
	  <Directory "E:/Work/rajat/Laravel_My_First_App">
        Require all granted 
    </Directory>
</VirtualHost>
```        
-Step 2: Find `C:\Windows\System32\drivers\etc\hosts` file and open in editor. Change as followed:
```
127.0.0.2 		www.laravelDemo.dev
```
