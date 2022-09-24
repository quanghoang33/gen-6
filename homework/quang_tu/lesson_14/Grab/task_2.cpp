#include <bits/stdc++.h>
using namespace std;

int solution (vector<int>& A) {
    int n = A.size(),
        i = 0;

    A.push_back(0);

    while (i < n + 1) {
        if (A[i] == i) {
            i++;
        } else {
            if (A[i] > n || A[A[i]] == A[i])
                return 0;

            int index = A[i];
            A[i] = A[A[i]];
            A[index] = index;
        }
    }

    return 1;
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