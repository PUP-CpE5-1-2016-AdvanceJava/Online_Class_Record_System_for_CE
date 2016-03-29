#FRONTEND

##Naming Convention 
If ever we need to name our `container`, `ID` is the only CSS Selector we'll use instead of class because it is already being used by bootstrap.

```html
<div class = "container-fluid" id = "footer-wrapper">
        <div class = "container">
            <div class="row">
                <div class="col-md-2" id = "footer-details">   
                    <a href "https://github.com/CoE-20"><i class = "fa fa-github"></i><span >COE-20</span></a>
                </div>
                <div class="col-md-7 col-md-push-4" id = "footer-details">
                    <a href = "https://github.com/JMEllarina"><i class = "fa fa-github"></i><span>Joanna Marie A. Ellarina</span></a>
                    <span>      </span>
                    <a = href = "https://github.com/Carowick122221"><i class = "fa fa-github"></i><span >Beatrice Nicole R. Quindoyos</span></a>
                </div>
            </div>
        </div>
    </div>   
```

 
So sa `ID` natin. Kapag magpapangalan laging start ng name ng mga tags ay kung ano yung main function niya - for this example `footer` then `dash` tapos yung mas specific na purpose niya sa buhay. For example `footer-wrapper` or `footer-details`. A must yung paglalagay ng dash `wrapper` sa mga pinaka-container talaga para madaling maghanap at kilalanin. 

<br>
***

<br>
##Other chuchu

```html
  <head>  
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
            
        <title>Thesis Database</title>
            
        <link type="text/css" href="/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link type="text/css" href="/fontawesome/css/font-awesome.min.css" rel="stylesheet">
            
        <link href='http://fonts.googleapis.com/css?family=Play:400,700' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Roboto+Slab' rel='stylesheet' type='text/css'>
        
        <link type="text/css" href="/stylesheet/stylesheet.css" rel="stylesheet">
  </head>  
```
<br>
Yung pagkakasunod sunod para maayos lang yung sa code. 

1. `Meta` tags na requirement ipalagay ng bootstrap. 
2. `Title` tag. Tapos yung sa `link` tag, 
3. `Link` tag <br> 
*yung mga plugin muna, <br>
*yung mga i-import  <br>
*yung stylesheet natin. 

Sa `script` tag din pag tatawagin na sila. So nakalagay siya before yung end tag ng `body`, sa baba. 

1. Una muna plugin for example yung jquery at yung js ng bootstrap. 
2. Yung script file natin.

<br>
***
<br>
##CSS 

```css
@import url(http://fonts.googleapis.com/css?family=Open+Sans:400,700);
a{color:#808080; text-decoration: none!important;}

/*footer*/
#footer-wrapper{position:fixed; background:#0A0A0A; width: 100%; height: 30px; z-index: 888; bottom:0; }
#footer-details {text-align: center; line-height: 2;}
#footer-details a{transition: color 750ms linear;}
#footer-details a:hover{color:#fff;}
#footer-details span{padding: 0 2px; font-size: 12px; font-family: 'Open Sans', sans-serif;}
#footer-details i{padding: 0 2px; }
```
<br>
Ayan. So sa css naman natin. Pagkakasunod sunod.

1. Nasa unahan pinaka itaas ay yung mga `import` natin for example yung sa google font api.
2. After nun, yung universal na setting natin sa mga tags. So for example yan nga yung `a` tag gusto mo baguhin ng color or yung `body` tag. 
3. Tapos yung na yung sa specific na css code na natin for different id or kung ano man.

Next, since maayos yung pagpapangalan natin sa id natin. Mas ayos siyang tignan diba? kung ano yung order sa html ganun din ang order sa css. 
Kung medyo nakakalito yung pag code ng css ng ganyang style ok na din yung per line yung mga properties pero i-delete na lang after yung spacing para ganyan. Mas madali kasi maghanap pag ganyan. 


Ayun. Yung sa pagkakaayos ng folders and files sa group ko na i-po-post.


