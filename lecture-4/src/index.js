

function f() {
    c = 'whatever'

    const a = 0
    const b = {}
    // do somthing else in f too
    function g() {
        let num = 0

        function h() {
            num += 1
            console.log(num)
        }

        return h
    }

    return g()
}

const foo = f()

foo()
foo()

const bar = f()

bar()