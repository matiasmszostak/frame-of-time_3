create database control_clientes;
use control_clientes;
show tables;
select * from clientes;



insert into clientes (    nombre      ,      email               ,     motivo_de_consulta     ,              mensaje                          )
values					  ("Matias Szostak", "matiasszostak@gmail.com", "Servicio fotográfico" , "Quería conocer el precio de este servicio." );


-- inserto más datos de prueba
insert into clientes(    nombre      ,      email               ,     motivo_de_consulta     ,              mensaje                                           )
values					  ("Batman"        , "therealbatman@gmail.com", "Servicio de Drone"    , "Necesito unas buenas tomas desde el cielo de Ciudad Gótica" ),
						  ("Alberto Samid" , "albertosamid@gmail.com" , "Servicio fotográfico" , "Quiero una sesión de fotos para Mac Rey."                   ),
						  ("Carlitos Balá" , "carlitosbala@gmail.com" , "Licencia de imágenes" , "Quiero saber cuánto sale la licencia."                      ),
						  ("Horacio Oneto" , "horaciooneto@gmail.com" , "Servicio fotográfico" , "Quiero una sesión de fotos con mis hackers en Cadore"       ),
						  ("Kanye West"    , "kanyewest@gmail.com"    , "Comprar fotografías"  , "Quiero comprar todas las fotos que tengas"                  );


						 
						 
drop table clientes;

