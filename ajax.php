<?
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include('inc/zsql.php');

if( !empty($_REQUEST['f']) && $_REQUEST['f'] == 'log' )
{
	$log = $_REQUEST['log'];

	$sql = "INSERT INTO soundboard_stats SET log = '$log', fecha = now()";

	$db->query($sql);
}

?>