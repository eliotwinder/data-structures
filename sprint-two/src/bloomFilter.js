var BloomFilter = function( size ) {
	var filter = {};

	filter._storage = new Array( size );

	filter.add = function( value ) {
		var indexes = [];
		indexes.push(hasherOne(value, size));
		indexes.push(hasherTwo(value, size));
		indexes.push(hasherThree(value, size));
		
		for (var i = 0; i < indexes.length; i++) {
			this._storage[indexes[i]] = 1;
		}

		return indexes;	
	};

	filter.check = function ( item ) {

	};

	return filter;
};

var hasherOne = function( key, max ) {
	var hash = 0;
	for (var i = 0; i < key.length; i++) {
	  hash = (hash<<5) + hash + key.charCodeAt(i);
	  hash = hash & hash; // Convert to 32bit integer
	  hash = Math.abs(hash);
	}
	return hash % max;
};

var hasherTwo = function( key, max ) {
	/**
	 * Jenkins hash implementation which yeilds 32-bit and 64-bit hashes.
	 *
	 * // Usage: 
	 * var j = new Jenkins();
	 * var hash32 = j.hash32("");
	 * var hash64 = j.hash64("");
	 */
	var Jenkins = function(seeds) {
	    /**
	     * Default first initial seed.
	     */
	    var pc = typeof(seeds) != 'undefined' && typeof(seeds[0]) != 'undefined' ? seeds[0] : 0;

	    /**
	     * Default second initial seed.
	     */
	    var pb = typeof(seeds) != 'undefined' && typeof(seeds[1]) != 'undefined' ? seeds[1] : 0;

	    // --------------------------------------------------
	    // Public access
	    // --------------------------------------------------

	    /**
	     * Computes and returns 32-bit hash of given message.
	     */
	    this.hash32 = function(msg) {
	        var h = lookup3(msg, pc, pb);
	        var hashed = (h.c).toString(16);
	        var result = 0;
	        for (var i = 0; i < hashed.length; i++) {
	        	if(Number.isInteger(hashed[i]*1)) {
	        		result += hashed[i] * 1;
	        	}
	        }
	        return result;
	    };

	    // --------------------------------------------------
	    // Private methods
	    // --------------------------------------------------

	    /**
	     * Implementation of lookup3 algorithm.
	     */
	    var lookup3 = function(k, pc, pb) {
	        var length = k.length;
	        var a, b, c;

	        a = b = c = 0xdeadbeef + length + pc;
	        c += pb;

	        var offset = 0;
	        while (length > 12) {
	            a += k[offset + 0];
	            a += k[offset + 1] << 8;
	            a += k[offset + 2] << 16;
	            a += k[offset + 3] << 24;

	            b += k[offset + 4];
	            b += k[offset + 5] << 8;
	            b += k[offset + 6] << 16;
	            b += k[offset + 7] << 24;

	            c += k[offset + 8];
	            c += k[offset + 9] << 8;
	            c += k[offset + 10] << 16;
	            c += k[offset + 11] << 24;

	            mixed = mix(a, b, c);
	            a = mixed.a;
	            b = mixed.b;
	            c = mixed.c;

	            length -= 12;
	            offset += 12;
	        }

	        switch (length) {
	            case 12: c += k[offset + 11] << 24;
	            case 11: c += k[offset + 10] << 16;
	            case 10: c += k[offset + 9] << 8;
	            case 9: c += k[offset + 8];

	            case 8: b += k[offset + 7] << 24;
	            case 7: b += k[offset + 6] << 16;
	            case 6: b += k[offset + 5] << 8;
	            case 5: b += k[offset + 4];

	            case 4: a += k[offset + 3] << 24;
	            case 3: a += k[offset + 2] << 16;
	            case 2: a += k[offset + 1] << 8;
	            case 1: a += k[offset + 0]; break;

	            case 0: return {c: c >>> 0, b: b >>> 0};
	        }

	        // Final mixing of three 32-bit values in to c
	        mixed = finalMix(a, b, c)
	        a = mixed.a;
	        b = mixed.b;
	        c = mixed.c;

	        return {c: c >>> 0, b: b >>> 0};
	    };

	    /**
	     * Mixes 3 32-bit integers reversibly but fast.
	     */
	    var mix = function(a, b, c) {
	        a -= c; a ^= rot(c, 4); c += b; 
	        b -= a; b ^= rot(a, 6); a += c;
	        c -= b; c ^= rot(b, 8); b += a;
	        a -= c; a ^= rot(c, 16); c += b;
	        b -= a; b ^= rot(a, 19); a += c;
	        c -= b; c ^= rot(b, 4); b += a;
	        return {a : a, b : b, c: c};
	    };

	    /**
	     * Final mixing of 3 32-bit values (a,b,c) into c
	     */
	    var finalMix = function(a, b, c) {
	        c ^= b; c -= rot(b, 14);
	        a ^= c; a -= rot(c, 11);
	        b ^= a; b -= rot(a, 25);
	        c ^= b; c -= rot(b, 16);
	        a ^= c; a -= rot(c, 4);
	        b ^= a; b -= rot(a, 14);
	        c ^= b; c -= rot(b, 24);
	        return {a : a, b : b, c: c};
	    };

	    /**
	     * Rotate x by k distance.
	     */
	    var rot = function(x, k) {
	        return (((x) << (k)) | ((x) >> (32-(k))));
	    };
	};

	var j = new Jenkins();
	console.log(key)
	return j.hash32(key) % max;
};

var hasherThree = function(str, seed) {
  var
    l = str.length,
    h = seed ^ l,
    i = 0,
    k;
  
  while (l >= 4) {
  	k = 
  	  ((str.charCodeAt(i) & 0xff)) |
  	  ((str.charCodeAt(++i) & 0xff) << 8) |
  	  ((str.charCodeAt(++i) & 0xff) << 16) |
  	  ((str.charCodeAt(++i) & 0xff) << 24);
    
    k = (((k & 0xffff) * 0x5bd1e995) + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));
    k ^= k >>> 24;
    k = (((k & 0xffff) * 0x5bd1e995) + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));

	h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)) ^ k;

    l -= 4;
    ++i;
  }
  
  switch (l) {
  case 3: h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
  case 2: h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
  case 1: h ^= (str.charCodeAt(i) & 0xff);
          h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
  }

  h ^= h >>> 13;
  h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
  h ^= h >>> 15;

  return h % seed;
}
