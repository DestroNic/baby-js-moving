<?php 

ini_set("SMTP","ssl://smtp.gmail.com");
ini_set("smtp_port","465");

function confirmation(){
    echo "
        Your Quote has been processed and someone will be in touch with you soon
    ";
}

if($_POST['moving'] ) 
{ 
   $name = $_POST['name'];
   $lname = $_POST['lname'];
   $phone = $_POST['phone'];
   $email = $_POST['email'];
   $addfrom = $_POST['addfrom'];
   $addto = $_POST['addto'];
   $date = $_POST['date'];
   $stairs = $_POST['stairs'];
   $number_movers = $_POST['number-movers'];

    $mail_body = "
                <p>Hello, You have received an inquiry from ".$name." ".$lname.",</p>
                <p>The request is to get a quote for Standard Moving</p>
                <p>This person is moving from <br> ".$addfrom." <br> to: <br> ".$addto."<br></p>
                <p>this person is trying to move on ".$date."<br> has stairs? : ".$stairs."</p>
                <p>Number of movers: ".$number_movers."</p>
                <p>Contact info: <br> Phone: ".$phone."<br> Email: ".$email."</p>
                ";

        $headers = 'From: Online Quote rcmalonso@gmail.com' . "\r\n" .
                    'X-Mailer: PHP/' . phpversion() . "\r\n" .
                    'Content-type: text/html; charset=iso-8859-1';
                    mail('rcmalonso@gmail.com', 'Online Quote Request', $mail_body, $headers);

    confirmation();
    
} 

elseif($_POST['wood-refinish'] && isset($_FILES['attachment']) ) 
{ 
    echo $_POST['name'];
    echo $_POST['lname'];
    echo $_POST['phone'];
    echo $_POST['email'];
	
} 

elseif($_POST['labor-only'] ) 
{ 
    echo $_POST['name'];
    echo $_POST['lname'];
    echo $_POST['phone'];
    echo $_POST['email'];
	
} 

elseif($_POST['tv-wall-mount'] ) 
{ 
    echo $_POST['name'];
    echo $_POST['lname'];
    echo $_POST['phone'];
    echo $_POST['email'];
	
} 

elseif($_POST['delivery'] ) 
{ 
    echo $_POST['name'];
    echo $_POST['lname'];
    echo $_POST['phone'];
    echo $_POST['email'];
	
} 

elseif($_POST['furniture-assembly'] ) 
{ 
    echo $_POST['name'];
    echo $_POST['lname'];
    echo $_POST['phone'];
    echo $_POST['email'];
	
} 

elseif($_POST['packing'] ) 
{ 
    echo $_POST['name'];
    echo $_POST['lname'];
    echo $_POST['phone'];
    echo $_POST['email'];
	
} 

?>