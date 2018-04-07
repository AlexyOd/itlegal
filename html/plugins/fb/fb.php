<?php

$errors = array();
$form_data = array();
$mdata = split('&',$_POST['data']);
unset($mdata[count($mdata)-1]);
$logo= '';$from ='';

$theme = $_POST['theme'] ? $_POST['theme'] : 'Письмо';
/*$logo =  $_POST['logo'] ? $_POST['logo'] :  false;*/
if ($_POST['logo']!='') {
	# code...
	$logo='	
		<tr>
			<td align="center" valign="top">
				<table border="0" cellpadding="0" cellspacing="0" width="600">
					<tr>
						<td class="headerContent" style="background:#001634; padding:10px 0px;">
							<img src="'.$_POST['logo'].'" style="max-width:600px; width: auto; margin: 0 auto;display: block;" />
						</td>
					</tr>
				</table>
			</td>
		</tr>';
}
if($_POST['from'])
{
	$from = $theme.' со страници: <a href='.$_POST['from'].' target="_blank" >'.$_POST['from'].'</a>';
}

foreach ($mdata as $k => $v) {
	$v = split(':',$v);
	$message .='<strong>	'.$v[0].':</strong>'.$v[1].'<br>';
}
$letter =
'
<html>
	<body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
		<center>
			<table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" >
				<tr>
					<td align="center" valign="top">
						<table border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #ddd">
							'.$logo.'
							<tr>
								<td align="center" valign="top">
									<table border="0" cellpadding="0" cellspacing="0" width="600" >
										<tr>
											<td colspan="3" valign="top" class="bodyContent">
											
												<table border="0" cellpadding="20" cellspacing="0" width="100%">
													<tr>
														<td valign="top">
															<div mc:edit="std_content00">
															Здраствуйте, вам пришло <strong>'.$theme.'</strong> <br/>
																'.$message.'
																<br/>
																'.$from.'
															</div>
														</td>
													</tr>
												</table>
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td align="center" valign="top">
									<table border="0" cellpadding="10" cellspacing="0" width="600" >
										<tr>
											<td valign="top" class="footerContent">
											
												<table border="0" cellpadding="10" cellspacing="0" width="100%" style="background:#D8E2EA;">
													 
													<tr>
														<td valign="middle" width="350" style="color: #000">
															Некорректное письмо? напишите нам <a href="http://sale-partners.ru/" target="_blank">sale-partners</a>
														</td>
														<td valign="middle" width="190" >
															<a href="http://sale-partners.ru/" target="_blank">
																<img src="http://sale-partners.ru/img/logo.png" alt=""  style="max-width: 100px; float: right;" />
															</a>
														</td>
													</tr>
												</table>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
						<br />
					</td>
				</tr>
			</table>
		</center>
	</body>
</html>';

if (!empty($errors))
{
	$form_data['success'] = false;
	$form_data['errors']  = $errors;
}
else
{

	$from ='noreply';
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=utf8' . "\r\n";
	$headers .= "From: " . $from . "\r\n";
	/*orlikallord1989@gmail.com*/
	/*office@spbuilder.com.ua*/
	if (mail('roscon.roman@gmail.com',$theme.' с сайта '.$_SERVER['HTTP_HOST'], $letter, $headers))
		{
			$form_data['success'] = true;
			$form_data['posted'] = 'Мы свяжемся с <span>Вами</span> в течение <span>12</span> часов';
		}
	else
		{
			$errors['name'] = 'Ошибка отправки письма';
		}
}


echo json_encode($form_data);

?>