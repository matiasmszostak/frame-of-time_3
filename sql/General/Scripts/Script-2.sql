create database control_clientes;
use control_clientes;
show tables;
select * from clientes;



insert into clientes (    nombre      ,      email               ,     motivo_de_consulta     ,              mensaje                          )
values					  ("Matias Szostak", "matiasszostak@gmail.com", "Servicio fotogr�fico" , "Quer�a conocer el precio de este servicio." );


-- inserto m�s datos de prueba
insert into clientes(    nombre      ,      email               ,     motivo_de_consulta     ,              mensaje                                           )
values					  ("Batman"        , "therealbatman@gmail.com", "Servicio de Drone"    , "Necesito unas buenas tomas desde el cielo de Ciudad G�tica" ),
						  ("Alberto Samid" , "albertosamid@gmail.com" , "Servicio fotogr�fico" , "Quiero una sesi�n de fotos para Mac Rey."                   ),
						  ("Carlitos Bal�" , "carlitosbala@gmail.com" , "Licencia de im�genes" , "Quiero saber cu�nto sale la licencia."                      ),
						  ("Horacio Oneto" , "horaciooneto@gmail.com" , "Servicio fotogr�fico" , "Quiero una sesi�n de fotos con mis hackers en Cadore"       ),
						  ("Kanye West"    , "kanyewest@gmail.com"    , "Comprar fotograf�as"  , "Quiero comprar todas las fotos que tengas"                  );


						 
						 
drop table clientes;

