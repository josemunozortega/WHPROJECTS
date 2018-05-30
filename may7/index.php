<?php
    $first = 'joey';
    $last = 'ortega';
    $a2 = 10;
    $b = 25;
    $c = $a + $b;
    $d = 'black';
?>



<p>
    <?php
        print 'test';


        $x = 5;
        echo $x;


    ?>
</p>

<p>Hello <?php print $a; ?>, Welcome to my site</p>

<p>
    My car is <?php echo $d; ?> 
</p>

<p> The answer is: <?php echo $c; ?> </p>

<!-- <p>Hello
    ?php with '<' goes on this line........
    /*
        $txt = '$first, ' ', $last';
        print $txt;
    ?>, Welcome to my site*/
//</p> -->

<?php   
    $x = 5;
    function test($myVar){
        echo "The value of x is: " . $myVar;
    }

    test($x);

    function test2(){
        // $y = 6;
        global $y;
        $y = 75;
    }
    test2();

    echo $y;

   // echo $x;
?>