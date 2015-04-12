function goBack() {
    window.history.back();
}

var div = document.getElementById('top');
				

				 // Looping through object employees
    var p = document.createElement('p');
    p.innerHTML = '	<div class="top-navbar-inner">' +
					'<!-- Begin Logo brand -->' +
					'<div class="logo-brand bg-success">' +
						'<div class="btn-collapse-sidebar-left">' +
							'<i class="fa fa-bars icon-dinamic"></i>' +
						'</div>' +
					'<a onclick="goBack()"><img src="assets/img/logo.png" ></a>' +
					'</div><!-- /.logo-brand -->' +
					'<!-- End Logo brand -->' +
					'<div class="top-nav-content">' +

					'</div><!-- /.top-nav-content -->' +
				'</div><!-- /.top-navbar-inner -->';


    	div.appendChild(p);