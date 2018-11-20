var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        //convert json to object
        var object = JSON.parse(xhttp.responseText);


        //add initial value when load the page (add the name)
        var initialLoadValue = object.results[0].name;
        var htmlinitialLoadValue = "<p class='animated rotateInDownRight'>Developer name is</p><h2 class='animated rotateInUpLeft'>" + initialLoadValue.title + " " + initialLoadValue.first + " " + initialLoadValue.last + "</h2>";
        $(".info-view").html(htmlinitialLoadValue);
        ////add another initial value when load the page (add the personal-img)
        var initialLoadImg = object.results[0].picture.large
        var htmlInitialLoadImg = "<img src='" + initialLoadImg + "'>";
        $(".personal-img").html(htmlInitialLoadImg);
        


        
        //call class name,icon,...... from html when ever mouse enter the icons,used jquery because why not
        $(".name").mouseenter(function () {
            // called getname function to make the code more cleaner
            getName();
        })
        $(".email").mouseenter(function () {
            getEmail();
        })
        $(".calender").mouseenter(function () {
            getCalender();
        })
        $(".location").mouseenter(function () {
            getLocation();
        })
        $(".phone").mouseenter(function () {
            getPhone();
        })
     

        // create getname function that get the name from the created object then called it in html class info-view
        // used dom, es-6 and used animate.css for fun 
        const getName = () => {
            var name = object.results[0].name;
            var htmlName = "<p class='animated rotateInDownRight'>Developer name is</p><h2 class='animated rotateInUpLeft '>" + name.title + " " + name.first + " " + name.last + "</h2>";
            var infoView = document.getElementsByClassName("info-view")[0];
            infoView.innerHTML = htmlName;
        }
        const getEmail = () => {
            var email = object.results[0].email.split("@");
            var htmlEmail = "<p class='animated fadeInRight'>Developer email address is</p><h2 class='animated fadeInLeft'>" + email[0]+" @"+email[1]+ "</h2>";
            var infoView = document.getElementsByClassName("info-view")[0];
            infoView.innerHTML = htmlEmail;
        }
        const getCalender = () => {
            var Calender = object.results[0].dob.date;
            //used regex to take only the date of birthday (dob) then reverse it
            var rgxOfBirthday = Calender.match(/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/gi)[0].split("-").reverse().join("-");
            var htmlCalender = "<p class='fadeInDown'>Developer birthday is</p><h2 class='animated fadeInUp'>" + rgxOfBirthday + "</h2>";
            var infoView = document.getElementsByClassName("info-view")[0];
            infoView.innerHTML = htmlCalender;
        }
        const getLocation = () => {
            var location = object.results[0].location.street;
            var htmlLocation = "<p class='animated bounceInDown'>Developer address is</p><h2 class='animated bounceInUp'>" + location + "</h2>";
            var infoView = document.getElementsByClassName("info-view")[0];
            infoView.innerHTML = htmlLocation;
        }
        const getPhone = () => {
            var phone = object.results[0].cell;
            var htmlPhone = "<p class='animated rotateIn'>Developer phone number is</p><h2 class='animated rollIn'>" + phone + "</h2>";
            var infoView = document.getElementsByClassName("info-view")[0];
            infoView.innerHTML = htmlPhone;
        }
    }

}
xhttp.open("GET", "https://randomuser.me/api/", true);
xhttp.send();

//hide and show button for the personal-img and info-view
$(".hidebutton").click(function(){
    $(".personal-img").hide(1000);
    $(".info-view").hide(1000);
    $(".hidebutton .fas").hide();
    $(".showbutton .fas").show();
})
$(".showbutton").click(function(){
    $(".personal-img").show(1000);
    $(".info-view").show(1000);
    $(".hidebutton .fas").show();
    $(".showbutton .fas").hide();
})
//hide and show button for the icons and info-view
$(".hidebutton-2").click(function(){
    $(".icons").hide(1000);
    $(".info-view").hide(1000);
    $(".hidebutton-2 .fas").hide();
    $(".showbutton-2 .fas").show();
})
$(".showbutton-2").click(function(){
    $(".icons").show(1000);
    $(".info-view").show(1000);
    $(".hidebutton-2 .fas").show();
    $(".showbutton-2 .fas").hide();
})