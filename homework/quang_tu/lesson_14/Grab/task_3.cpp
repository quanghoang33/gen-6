#include <bits/stdc++.h>
using namespace std;

class Solution {
    vector<int> cityList;

public:
    Solution(vector<int> t) {
        cityList = t;
    }

    vector<int> distanceFromCapital() {
        unordered_map<int, vector<int>> citiesMap;
        vector<bool> visited (cityList.size(), false);
        vector<int> res (cityList.size() - 1, 0);
        int capital = -1;

        for (int i = 0; i < cityList.size(); ++i) {
            if (i == cityList[i]) {
                capital = i;
            } else {
                citiesMap[i].push_back(cityList[i]);
                citiesMap[cityList[i]].push_back(i);
            }
        }

        queue<pair<int,int>> cityQueue;
        cityQueue.push({capital, -1});

        while (!cityQueue.empty()) {
            pair<int,int> curCity = cityQueue.front();
            cityQueue.pop();

            int index = curCity.second;

            visited[curCity.first] = true;

            if (index >= 0) {
                res[index]++;
            }

            for (auto city: citiesMap[curCity.first]) {
                if (!visited[city]) {
                    cityQueue.push({city, index + 1});
                }
            }
        }

        return res;
    }
};

void solve() {
    int n;
    cin >> n;
    vector<int> A (n);

    for (int i = 0; i < n; ++i)
        cin >> A[i];

    Solution sol(A);
    vector<int> res = sol.distanceFromCapital();

    for (auto x: res) {
        cout << x << " ";
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int t;
    cin >> t;

    for (int i = 1; i <= t; ++i) {
        cout << "Case #" << i << ": ";
        solve();
    }

    return 0;
}