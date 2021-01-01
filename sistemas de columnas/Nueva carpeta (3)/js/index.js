$('.underline').css({animationPlayState : 'running'});

$('.proyectos .content .col .secondary-row .secondary-col .first-item a').on('click', desaparece);

function desaparece(){

	var cual=$(this).attr('id');

	$('.secondary-row').css({animationPlayState : 'running'});
	$('.row:nth-child(2)').animate({ top: 0 },5000, cargar);

	function cargar(){

		var parametro = cual;
		

		$.ajax({ url:'js/proyectos.xml', data:parametro, success:procesaProyectos});

		function procesaProyectos (docXML) {
    
    		$(docXML).find('proyecto').each(pintaProyecto);

    		function pintaProyecto(index){


    			var nombre=$(this).find('titulo').text();
    				// alert(index + ':' + nombre);

    			if (nombre == parametro){

    					// alert('hola');

	    				// var titulo = $(this).find('titulo').text();
	    		var descripcion = $(this).find('descripcion').text();
	    		var foto = $(this).find('foto').text();

	    		var proyecto = '<div class="proyecto">';
        					// proyecto+= '<figure><img src="'+foto+'"></figure>';
			        proyecto+= '<h1>'+nombre+'</h1>';
					proyecto+= '<p>'+descripcion+'</p>';
					proyecto+= '</div>';

					$('.cargaProyectos').append(proyecto);

    			}
    			
    		}

		}				
	}	
		
}