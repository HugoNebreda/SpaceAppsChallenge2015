var div = document.getElementById('menu');
				

				 // Looping through object employees
    var p = document.createElement('p');
    p.innerHTML = '<ul class="sidebar-menu">' +
					'<li class="static left-profile-summary">' +
						'<div class="media">' +
						  '<p class="pull-left">' +
							'<img src="assets/img/avatar/avatar-1.jpg" class="avatar img-circle media-object" alt="Avatar">' +
						 ' </p>' +
						 ' <div class="media-body">' +
							'<h4>Hi, <br /><strong>Juan Ramon!</strong></h4>' +
							'<button class="btn btn-success btn-xs"><i class="fa fa-cog"></i></button>&nbsp;' +
							'<button class="btn btn-danger btn-xs">Log out</button>' +
						  '</div>' +
						'</div>' +
					'</li>' +
					'<li><a href="missions.html"><i class="fa fa-space-shuttle icon-sidebar"></i>Missions</a></li>' +
					'<li><a href="journals.html"><i class="fa fa-book icon-sidebar"></i>Mission Journal</a></li>' +
					'<li><a href="stats.html"><i class="fa fa-bar-chart icon-sidebar"></i>Stats</a></li>' +
					'<li><a href="#"><i class="fa fa-cogs icon-sidebar"></i>Settings</a></li>' +
					'<li><a href="#"><i class="fa fa-life-ring icon-sidebar"></i>About</a></li>' +
				'</ul>';


    	div.appendChild(p);