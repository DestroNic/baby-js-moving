<?php 




ini_set("SMTP","ssl://smtp.gmail.com");
ini_set("smtp_port","465");

function confirmation(){
    echo "
        Your Quote has been processed and someone will be in touch with you soon
    ";
}

   $name = $_POST['name'];
   $lname = $_POST['lname'];
   $phone = $_POST['phone'];
   $email = $_POST['email'];
   $add_comment = $_POST['add-comment'];
   $first_choice = $_POST['first-choice'];
   $second_choice = $_POST['second-choice'];
   $third_choice = $_POST['third-choice'];

if(isset($_POST['moving'] )) 
{ 
   
   $addfrom = $_POST['addfrom'];
   $addto = $_POST['addto'];
   $date = $_POST['date'];
   $stairs = $_POST['stairs'];
   $flights = $_POST['flights'];
   $number_movers = $_POST['number-movers'];
   $ready_to_move = $_POST['ready-to-move'];
   $where_to_park = $_POST['where-to-park'];
   $date = $_POST['date'];


    $mail_body = "
                <p>You have an inquiry from ".$name." ".$lname.",</p>
                <p>The request is to get a quote for Standard Moving</p>
                <p>This person is moving from <br> ".$addfrom." <br> to: <br> ".$addto."<br></p>
                <p>this person is trying to move on ".$date."<br> has stairs? : ".$stairs."</p>
                <p>How many flights? : ". $flights ."</p>
                <p>Number of movers: ". $number_movers ."</p>
                <p>Are items ready to move? : ". $ready_to_move ."</p>
                <p>Where should you park? : ". $where_to_park ."</p>
                <p>Contact info: <br> Phone: ". $phone ."<br> Email: ". $email ."</p>
                <p>Additional Comments:</p>
                <p>". $add_comment."</p>
                <p>Desired moving date: ". $date ."</p>
                <p>Preferred time of the day: </p>
                
                <p>First choice: ". $first_choice ."</p>
                <p>Second choice: ". $second_choice ."</p>
                <p>Third choice: ". $third_choice ."</p>
                ";

        $headers = 'From: Online Quote rcmalonso@gmail.com' . "\r\n" .
                    'X-Mailer: PHP/' . phpversion() . "\r\n" .
                    'Content-type: text/html; charset=iso-8859-1';
                    mail('rcmalonso@gmail.com', 'Online Quote Request', $mail_body, $headers);

    confirmation();
    
} 

elseif(isset($_POST['wood-refinish'] )) 
{ 
    if (isset($_FILES) && (bool) $_FILES) {

        $allowedExtensions = array("pdf", "doc", "docx", "gif", "jpeg", "jpg", "png", "txt");
    
        $files = array();
        foreach ($_FILES as $name => $file) {
            $file_name = $file['name'];
            $temp_name = $file['tmp_name'];
            $file_type = $file['type'];
            $path_parts = pathinfo($file_name);
            $ext = $path_parts['extension'];
            if (!in_array($ext, $allowedExtensions)) {
                die("File $file_name has the extensions $ext which is not allowed");
            }
            array_push($files, $file);
        }
        
        $mail_body = "
        You have an inquiry from ".$name." ".$lname.",
        The request is to get a quote for Wood Refinish
        Contact info:
        Phone: ". $phone ."
        Email: ". $email ."
        Additional Comments:
        ". $add_comment."
        Preferred time of the day: 
        
        First choice: ". $first_choice ."
        Second choice: ". $second_choice ."
        Third choice: ". $third_choice ."
        ";
    
        $to = "rcmalonso@gmail.com";
        $from = $email;
        $subject = "Online quote request";
        $message = $mail_body;
        $headers = "From: $from";
    
    
        $semi_rand = md5(time());
        $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";
    
    
        $headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\"";
        $message = "This is a multi-part message in MIME format.\n\n" . "--{$mime_boundary}\n" . "Content-Type: text/plain; charset=\"iso-8859-1\"\n" . "Content-Transfer-Encoding: 7bit\n\n" . $message . "\n\n";
        $message .= "--{$mime_boundary}\n";
    
        // preparing attachments
        for ($x = 0; $x < count($files); $x++) {
            $file = fopen($files[$x]['tmp_name'], "rb");
            $data = fread($file, filesize($files[$x]['tmp_name']));
            fclose($file);
            $data = chunk_split(base64_encode($data));
            $name = $files[$x]['name'];
            $message .= "Content-Type: {\"application/octet-stream\"};\n" . " name=\"$name\"\n" .
                    "Content-Disposition: attachment;\n" . " filename=\"$name\"\n" .
                    "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
            $message .= "--{$mime_boundary}\n";
        }
        // send
    
        $ok = mail($to, $subject, $message, $headers);
        if ($ok) {
            echo "<p style='tex-align:center'>mail sent to $to!</p>";
        } else {
            echo "<p>mail could not be sent!</p>";
        }
    }

    confirmation();
} 

elseif(isset($_POST['labor-only'] )) 
{ 

    $truck_size = $_POST['truck-size'];
    $trailer_size = $_POST['trailer-size'];
    $date = $_POST['date'];


    if (isset($_FILES) && (bool) $_FILES) {

        $allowedExtensions = array("pdf", "doc", "docx", "gif", "jpeg", "jpg", "png", "txt");
    
        $files = array();
        foreach ($_FILES as $name => $file) {
            $file_name = $file['name'];
            $temp_name = $file['tmp_name'];
            $file_type = $file['type'];
            $path_parts = pathinfo($file_name);
            $ext = $path_parts['extension'];
            if (!in_array($ext, $allowedExtensions)) {
                die("File $file_name has the extensions $ext which is not allowed");
            }
            array_push($files, $file);
        }
        
        $mail_body = "
        You have an inquiry from ".$name." ".$lname.",
        The request is to get a quote for Labor Only
        Contact info:
        Phone: ". $phone ."
        Email: ". $email ."
        Additional Comments:
        ". $add_comment."
        Preferred time of the day: 
        
        First choice: ". $first_choice ."
        Second choice: ". $second_choice ."
        Third choice: ". $third_choice ."
        ";
    
        $to = "rcmalonso@gmail.com";
        $from = $email;
        $subject = "Online quote request";
        $message = $mail_body;
        $headers = "From: $from";
    
    
        $semi_rand = md5(time());
        $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";
    
    
        $headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\"";
        $message = "This is a multi-part message in MIME format.\n\n" . "--{$mime_boundary}\n" . "Content-Type: text/plain; charset=\"iso-8859-1\"\n" . "Content-Transfer-Encoding: 7bit\n\n" . $message . "\n\n";
        $message .= "--{$mime_boundary}\n";
    
        // preparing attachments
        for ($x = 0; $x < count($files); $x++) {
            $file = fopen($files[$x]['tmp_name'], "rb");
            $data = fread($file, filesize($files[$x]['tmp_name']));
            fclose($file);
            $data = chunk_split(base64_encode($data));
            $name = $files[$x]['name'];
            $message .= "Content-Type: {\"application/octet-stream\"};\n" . " name=\"$name\"\n" .
                    "Content-Disposition: attachment;\n" . " filename=\"$name\"\n" .
                    "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
            $message .= "--{$mime_boundary}\n";
        }
        // send
    
        $ok = mail($to, $subject, $message, $headers);
        if ($ok) {
            echo "<p style='tex-align:center'>mail sent to $to!</p>";
        } else {
            echo "<p>mail could not be sent!</p>";
        }
    }

    confirmation();
	
} 

elseif(isset($_POST['tv-wall-mount'] )) 
{ 

    $type_wall = $_POST['type-wall'];
    $tv_size = $_POST['tv-size'];
    $hid_cords = $_POST['hid-cords'];
    $tv_quant = $_POST['tv-quant'];
    $have_wall_mount = $_POST['have-wall-mount'];
    $date = $_POST['date'];


    $mail_body = "
    <p>You have an inquiry from ".$name." ".$lname.",</p>
    <p>The request is to get a quote for TV Wall mount</p>
    <p>Type of wall: ". $type_wall ."</p>
    <p>TV size: ". $tv_size ."</p>
    <p>Cords hidden: ". $hid_cords ."</p>
    <p>How many TV's : ". $tv_quant ."</p>
    <p>Do you have a wall mount: ". $have_wall_mount ."</p>
    <p>Contact info: </p>
    <p>Phone: ". $phone ."</p> 
    <p>Email: ". $email ."</p>
    <p>Additional Comments:</p>
    <p>". $add_comment."</p>
    <p>Desired moving date: ". $date ."</p>
    <p>Preferred time of the day: </p>
    
    <p>First choice: ". $first_choice ."</p>
    <p>Second choice: ". $second_choice ."</p>
    <p>Third choice: ". $third_choice ."</p>
    ";

$headers = 'From: Online Quote rcmalonso@gmail.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion() . "\r\n" .
        'Content-type: text/html; charset=iso-8859-1';
        mail('rcmalonso@gmail.com', 'Online Quote Request', $mail_body, $headers);

confirmation();
} 

elseif(isset($_POST['delivery'] )) 
{ 
    echo $_POST['name'];
    echo $_POST['lname'];
    echo $_POST['phone'];
    echo $_POST['email'];
	
} 

elseif(isset($_POST['furniture-assembly'] )) 
{ 
    echo $_POST['name'];
    echo $_POST['lname'];
    echo $_POST['phone'];
    echo $_POST['email'];
	
} 

elseif(isset($_POST['packing'] )) 
{ 
    echo $_POST['name'];
    echo $_POST['lname'];
    echo $_POST['phone'];
    echo $_POST['email'];
	
} 

?>