/*
 * An object representing a 3d vector to make operations simple and concise.
 */

var Vector3 = function(x = 0, y = 0, z = 0) {
	this.x = x; this.y = y; this.z = z;
	// todo - make sure to set a default value in case x, y, or z is not passed in

	this.set = function(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
		//todo set this' values to those from x, y, and z
		return this;
	}

	this.clone = function() {
		return new Vector3(this.x, this.y, this.z);
	};

	this.copy = function(other) {
		this.x = other.x;
		this.y = other.y;
		this.z = other.z;
		// copy the values from other into this
		return this;
	}

	this.add = function(v) {
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		// todo - add v to this vector (1pt)
		// This SHOULD change the values of this.x, this.y, and this.z
		return this;
	};

	this.subtract = function(v) {
		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
		// todo - subtract v from this vector (1pt)
		// This SHOULD change the values of this.x, this.y, and this.z
		return this;
	};

	this.negate = function() {
		this.x = -this.x;
		this.y = -this.y;
		this.z = -this.z;
		// multiply this vector by -1 (1pt)
		// This SHOULD change the values of this.x, this.y, and this.z
		return this;
	};

	this.multiplyScalar = function(scalar) {
		this.x = this.x*scalar;
		this.y = this.y*scalar;
		this.z = this.z*scalar;
		// multiply this vector by "scalar" (1pt)
		// This SHOULD change the values of this.x, this.y, and this.z
		return this;
	};

	this.length = function() {
		// todo - return the magnitude (a.k.a length) of this vector (1pt)
		// This should NOT change the values of this.x, this.y, and this.z
		return Math.sqrt(Math.pow(this.x, 2)+Math.pow(this.y, 2)+Math.pow(this.z, 2));
	};

	this.lengthSqr = function() {
		// todo - return the squared magnitude of this vector ||v||^2 (1pt)
		// This should NOT change the values of this.x, this.y, and this.z
		return Math.pow(Math.sqrt(Math.pow(this.x, 2)+Math.pow(this.y, 2)+Math.pow(this.z, 2)),2);
	};

	this.normalized = function() {
		var v = new Vector3();
		var len = Math.sqrt(Math.pow(this.x, 2)+Math.pow(this.y, 2)+Math.pow(this.z, 2));
		
		v.x = this.x/len;
		v.y = this.y/len;
		v.z = this.z/len;
		// todo - return a new vector that is a normalized version of this vector (1pt)
		// This should NOT change the values of this.x, this.y, and this.z
		return v; // Should return a new vector that is not this
	};

	this.normalize = function() {
		var len = Math.sqrt(Math.pow(this.x, 2)+Math.pow(this.y, 2)+Math.pow(this.z, 2));
		
		this.x = this.x/len;
		this.y = this.y/len;
		this.z = this.z/len;
		// todo - Change the components of this vector so that its magnitude will equal 1. (1pt)
		// This SHOULD change the values of this.x, this.y, and this.z
		return this;
	};

	this.dot = function(other) {
		// todo - return the dot product betweent this vector and "other" (5pt)
		// This should NOT change the values of this.x, this.y, and this.z
		return this.x*other.x + this.y*other.y + this.z*other.z;
	};

	this.cross = function(other) {
		var v = new Vector3();
		
		v.x = this.y*other.z - this.z*other.y;
		v.y = this.z*other.x - this.x*other.z;
		v.z = this.x*other.y - this.y*other.x;
		// todo - return the cross product (as a new vector) betweent this vector and "other" (3pt)
		// This should NOT change the values of this.x, this.y, and this.z
		return v;
	}
};
