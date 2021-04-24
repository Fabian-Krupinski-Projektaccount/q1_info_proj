class Player {
	constructor() {
		this.x = 4;
		this.y = 0;
		this.direction = 1;  //0=N  1=E  2=S  3=W

		this.camera = undefined;
		this.light = undefined;
	}

	forward() {
		var room = JSON.parse($.ajax({
		    url: '/requests/getroom.php?mid=2&x=' + this.y + '&y=' + this.x,
		    async: false,
		    dataType: 'json'
		}).responseText).room[0];

		if (this.direction == 0) {
			if (room.nblocked == 0) {
				this.x--;
			}
		} else if(this.direction == 1) {
			if (room.eblocked == 0) {
				this.y++;
			}
		} else if(this.direction == 2) {
			if (room.sblocked == 0) {
				this.x++;
			}
		} else if(this.direction == 3) {
			if (room.wblocked == 0) {
				this.y--;
			}
		}
	}

	backwards() {
		var room = JSON.parse($.ajax({
		    url: '/requests/getroom.php?mid=2&x=' + this.y + '&y=' + this.x,
		    async: false,
		    dataType: 'json'
		}).responseText).room[0];

		if (this.direction == 0) {
			if (room.sblocked == 0) {
				this.x++;
			}
		} else if(this.direction == 1) {
			if (room.wblocked == 0) {
				this.y--;
			}
		} else if(this.direction == 2) {
			if (room.nblocked == 0) {
				this.x--;
			}
		} else if(this.direction == 3) {
			if (room.eblocked == 0) {
				this.y++;
			}
		}
	}

	turnleft() {
		this.direction--;
		if (this.direction == -1) {
			this.direction = 3;
		}
	}

	turnright() {
		this.direction++;
		if (this.direction == 4) {
			this.direction = 0;
		}
	}
}
