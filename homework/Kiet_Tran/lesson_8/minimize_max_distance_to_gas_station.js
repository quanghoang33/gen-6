/**
 * https://leetcode.com/problems/minimize-max-distance-to-gas-station/
 * 
 * @param {number[]} stations
 * @param {number} k
 * @return {number}
 */
 var minmaxGasDist = function(stations, k) {
    var low = 0;
    var high = 1e8;

    while(high - low > 1e-6) {
        var mid = (low + high) / 2.0;
        if (possible(mid, stations, k)) {
            high = mid;
        } else {
            low = mid;
        }
    }

    return low;
};

var possible = function(distance, stations, k) {
    var used = 0;
    for (var i = 0; i < stations.length - 1; i++) {
        used += parseInt((stations[i + 1] - stations[i]) / distance);
    }

    return used <= k;
}
