int main() {
    auto f = []{
        int num = 0;
        auto g = [num]{
            num += 1;
        }

    }

    auto foo = f()

    foo()
    foo()

}

class g {
    operator() {}

    int num;
}
