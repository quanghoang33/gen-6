#include <bits/stdc++.h>
using namespace std;

int solution (vector<int>& A) {
    int n = A.size();

    vector<int> prefix (n + 2, 0);

    for (int i = 0; i < n; ++i)
        prefix[i+1] = prefix[i] + A[i];
    prefix[n+1] = prefix[n];

    if (prefix[n] == 0)
        return 0;

    for (int i = 1; i <= n; ++i) {
        if (prefix[i-1] == prefix[n] - prefix[i])
            return i-1;
    }

    return -1;
}

void solve() {
    int n;
    cin >> n;

    vector<int> A (n);

    for (int i = 0; i < n; ++i)
        cin >> A[i];

    int res = solution(A);

    cout << res << endl;
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