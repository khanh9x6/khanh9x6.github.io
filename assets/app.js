(function(t) {
    function e(e) {
        for (var o, r, l = e[0], s = e[1], c = e[2], d = 0, p = []; d < l.length; d++) r = l[d], Object.prototype.hasOwnProperty.call(a, r) && a[r] && p.push(a[r][0]), a[r] = 0;
        for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (t[o] = s[o]);
        u && u(e);
        while (p.length) p.shift()();
        return i.push.apply(i, c || []), n()
    }

    function n() {
        for (var t, e = 0; e < i.length; e++) {
            for (var n = i[e], o = !0, l = 1; l < n.length; l++) {
                var s = n[l];
                0 !== a[s] && (o = !1)
            }
            o && (i.splice(e--, 1), t = r(r.s = n[0]))
        }
        return t
    }
    var o = {},
        a = {
            app: 0
        },
        i = [];

    function r(e) {
        if (o[e]) return o[e].exports;
        var n = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = t, r.c = o, r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) r.d(n, o, function(e) {
                return t[e]
            }.bind(null, o));
        return n
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "/";
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
        s = l.push.bind(l);
    l.push = e, l = l.slice();
    for (var c = 0; c < l.length; c++) e(l[c]);
    var u = s;
    i.push([0, "chunk-vendors"]), n()
})({
    0: function(t, e, n) {
        t.exports = n("56d7")
    },
    1935: function(t, e, n) {
        "use strict";
        var o = n("6d48"),
            a = n.n(o);
        a.a
    },
    "1acb": function(t, e, n) {},
    "21bf": function(t, e, n) {},
    "45b1": function(t, e, n) {
        t.exports = n.p + "img/keep-logo.579de524.png"
    },
    "4adf": function(t, e, n) {
        "use strict";
        var o = n("21bf"),
            a = n.n(o);
        a.a
    },
    "4e8e": function(t, e, n) {
        "use strict";
        var o = n("a04e"),
            a = n.n(o);
        a.a
    },
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = {};
        n.r(o), n.d(o, "createNote", function() {
            return f
        }), n.d(o, "getNotes", function() {
            return m
        }), n.d(o, "updateNote", function() {
            return v
        }), n.d(o, "deleteNote", function() {
            return h
        });
        n("cadf"), n("551c"), n("f751"), n("097d");
        var a = n("2b0e"),
            i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [t._m(0), n("CreateNoteForm"), n("Notes"), n("transition", {
                    attrs: {
                        name: "modal"
                    }
                }, [t.showModal ? n("UpdateModal", {
                    attrs: {
                        note: t.selectedNote
                    }
                }) : t._e()], 1)], 1)
            },
            r = [function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "logos"
                }, [o("span", {
                    staticClass: "logo keep"
                }, [o("img", {
                    attrs: {
                        src: n("45b1"),
                        alt: "Google Keep"
                    }
                })]), o("span", {
                    staticClass: "plus"
                }, [t._v("\n      +\n    ")]), o("span", {
                    staticClass: "logo vue"
                }, [o("img", {
                    attrs: {
                        src: n("95c7"),
                        alt: "Vue"
                    }
                })]), o("span", {
                    staticClass: "plus"
                }, [t._v("\n      +\n    ")]), o("span", {
                    staticClass: "logo firebase"
                }, [o("img", {
                    attrs: {
                        src: n("945a"),
                        alt: "Firebase"
                    }
                })])])
            }],
            l = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "notes"
                }, t._l(t.notes, function(t, e) {
                    return n("Note", {
                        key: e,
                        attrs: {
                            note: t
                        }
                    })
                }), 1)
            },
            s = [],
            c = (n("ac6a"), n("456d"), n("59ca")),
            u = n.n(c);
        n("66ce");
        if (!u.a.apps.length) {
            var d = {
                apiKey: "AIzaSyBnZq-3l1uRRUOCF_8ErhoIzCxyqPLYSqc",
                authDomain: "app-note-549cc.firebaseapp.com",
                databaseURL: "https://app-note-549cc-default-rtdb.firebaseio.com",
                projectId: "app-note-549cc",
                storageBucket: "app-note-549cc.appspot.com",
                messagingSenderId: "901719399351"
            };
            u.a.initializeApp(d)
        }
        var p = u.a.database(),
            f = function(t, e) {
                var n = p.ref().child("notes").push().key;
                return p.ref("notes").push({
                    id: n,
                    title: t,
                    content: e
                })
            },
            m = function(t) {
                return p.ref("notes").on("value", t)
            },
            v = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    o = arguments.length > 3 ? arguments[3] : void 0;
                return p.ref("notes").orderByChild("id").equalTo(t).once("value").then(function(t) {
                    t.forEach(function(t) {
                        p.ref("notes").child(t.key).update({
                            title: e,
                            content: n
                        })
                    }), o()
                })
            },
            h = function(t) {
                return p.ref("notes").orderByChild("id").equalTo(t).once("value").then(function(t) {
                    t.forEach(function(t) {
                        p.ref("notes").child(t.key).remove()
                    })
                })
            },
            b = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "note",
                    on: {
                        click: function(e) {
                            return t.selectNote(t.note)
                        }
                    }
                }, [n("EditIcon"), t.note.title || t.note.content ? n("div", [t.note.title ? n("h1", [t._v("\n      " + t._s(t.note.title) + "\n    ")]) : t._e(), t.note.content ? n("p", [n("pre", [t._v(t._s(t.note.content))])]) : t._e()]) : n("div", {
                    staticClass: "empty"
                }, [t._v("\n    Empty Note\n  ")])], 1)
            },
            g = [],
            y = new a["a"],
            _ = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24"
                    }
                }, [n("path", {
                    attrs: {
                        fill: "none",
                        d: "M0 0h24v24H0V0z"
                    }
                }), n("path", {
                    attrs: {
                        d: "M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"
                    }
                })])
            },
            w = [],
            N = n("2877"),
            x = {},
            C = Object(N["a"])(x, _, w, !1, null, null, null),
            O = C.exports,
            j = {
                components: {
                    EditIcon: O
                },
                props: {
                    note: {
                        type: Object,
                        required: !0
                    }
                },
                methods: {
                    selectNote: function(t) {
                        y.$emit("note-selected", t)
                    }
                }
            },
            k = j,
            M = (n("4e8e"), Object(N["a"])(k, b, g, !1, null, null, null)),
            E = M.exports,
            P = {
                components: {
                    Note: E
                },
                data: function() {
                    return {
                        notes: []
                    }
                },
                mounted: function() {
                    var t = this;
                    o.getNotes(function(e) {
                        var n = e.val();
                        t.notes = Object.keys(n).map(function(t) {
                            return n[t]
                        }).reverse()
                    })
                }
            },
            $ = P,
            T = (n("1935"), Object(N["a"])($, l, s, !1, null, null, null)),
            F = T.exports,
            V = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "create-form"
                }, [t.titleFieldVisible ? n("div", {
                    staticClass: "backdrop",
                    on: {
                        click: t.hideTitleField
                    }
                }) : t._e(), n("form", {
                    staticClass: "create-note",
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.createNote()
                        }
                    }
                }, [t.titleFieldVisible ? n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.title,
                        expression: "title"
                    }],
                    attrs: {
                        name: "title",
                        placeholder: "Title"
                    },
                    domProps: {
                        value: t.title
                    },
                    on: {
                        focus: t.showTitleField,
                        input: function(e) {
                            e.target.composing || (t.title = e.target.value)
                        }
                    }
                }) : t._e(), n("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.content,
                        expression: "content"
                    }],
                    attrs: {
                        name: "content",
                        placeholder: "Take a note..."
                    },
                    domProps: {
                        value: t.content
                    },
                    on: {
                        focus: t.showTitleField,
                        input: function(e) {
                            e.target.composing || (t.content = e.target.value)
                        }
                    }
                }), t._m(0)])])
            },
            I = [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("button", {
                    attrs: {
                        type: "submit"
                    }
                }, [n("span", [t._v("+")])])
            }],
            z = {
                data: function() {
                    return {
                        title: "",
                        content: "",
                        titleFieldVisible: !1
                    }
                },
                methods: {
                    createNote: function() {
                        var t = this;
                        (this.title || this.content) && o.createNote(this.title.trim(), this.content.trim()).then(function() {
                            t.title = "", t.content = "", t.titleFieldVisible = !1
                        }, function(t) {
                            return console.error(t)
                        })
                    },
                    showTitleField: function() {
                        this.titleFieldVisible = !0
                    },
                    hideTitleField: function() {
                        this.titleFieldVisible = !1
                    }
                }
            },
            L = z,
            S = (n("9226"), Object(N["a"])(L, V, I, !1, null, null, null)),
            D = S.exports,
            q = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.note ? n("div", {
                    staticClass: "modal-backdrop",
                    on: {
                        click: t.dismissModal
                    }
                }, [n("div", {
                    staticClass: "modal",
                    attrs: {
                        role: "dialog",
                        "aria-labelledby": "modalTitle",
                        "aria-describedby": "modalContent"
                    }
                }, [n("form", {
                    staticClass: "edit-form",
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.update(e)
                        },
                        click: function(t) {
                            t.stopPropagation()
                        }
                    }
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.mutableNote.title,
                        expression: "mutableNote.title"
                    }],
                    attrs: {
                        id: "modalTitle",
                        name: "title",
                        placeholder: "Title"
                    },
                    domProps: {
                        value: t.mutableNote.title
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.mutableNote, "title", e.target.value)
                        }
                    }
                }), n("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.mutableNote.content,
                        expression: "mutableNote.content"
                    }],
                    attrs: {
                        id: "modalContent",
                        name: "content",
                        placeholder: "Take a note...",
                        rows: "8"
                    },
                    domProps: {
                        value: t.mutableNote.content
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.mutableNote, "content", e.target.value)
                        }
                    }
                }), n("footer", {
                    staticClass: "modal-footer"
                }, [n("button", {
                    staticClass: "delete-button",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: t.remove
                    }
                }, [n("DeleteIcon")], 1), t._m(0)])])])]) : t._e()
            },
            B = [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("button", {
                    staticClass: "submit-button",
                    attrs: {
                        type: "submit"
                    }
                }, [n("span", [t._v("Done")])])
            }],
            H = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                    }
                }), n("path", {
                    attrs: {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }
                })])
            },
            U = [],
            A = {},
            R = Object(N["a"])(A, H, U, !1, null, null, null),
            J = R.exports,
            K = {
                components: {
                    DeleteIcon: J
                },
                props: {
                    note: {
                        type: Object,
                        default: function() {}
                    }
                },
                data: function() {
                    return {
                        mutableNote: this.note
                    }
                },
                methods: {
                    dismissModal: function() {
                        y.$emit("modal-dismissed")
                    },
                    update: function() {
                        var t = this,
                            e = this.mutableNote.id,
                            n = this.mutableNote.title,
                            a = this.mutableNote.content;
                        o.updateNote(e, n, a, function() {
                            t.dismissModal()
                        }, function(t) {
                            console.error(t)
                        })
                    },
                    remove: function() {
                        var t = this,
                            e = this.mutableNote.id;
                        window.confirm("Do you really want to delete this note?") && o.deleteNote(e).then(function() {
                            t.dismissModal()
                        }, function(t) {
                            console.error(t)
                        })
                    }
                }
            },
            G = K,
            Y = (n("4adf"), Object(N["a"])(G, q, B, !1, null, null, null)),
            Z = Y.exports,
            Q = function(t) {
                t.style.height = "inherit";
                var e = window.getComputedStyle(t),
                    n = parseInt(e.getPropertyValue("border-top-width"), 10) + parseInt(e.getPropertyValue("padding-top"), 10) + t.scrollHeight + parseInt(e.getPropertyValue("padding-bottom"), 10) + parseInt(e.getPropertyValue("border-bottom-width"), 10);
                t.style.height = "".concat(n, "px")
            },
            W = {
                name: "App",
                components: {
                    Notes: F,
                    CreateNoteForm: D,
                    UpdateModal: Z
                },
                data: function() {
                    return {
                        selectedNote: null,
                        showModal: !1
                    }
                },
                created: function() {
                    var t = this;
                    y.$on("note-selected", function(e) {
                        t.selectedNote = e, t.showModal = !0, document.body.classList.add("freeze")
                    }), y.$on("modal-dismissed", function() {
                        t.selectedNote = null, t.showModal = !1, document.body.classList.remove("freeze")
                    })
                },
                mounted: function() {
                    document.addEventListener("input", function(t) {
                        "textarea" === t.target.tagName.toLowerCase() && Q(t.target)
                    }, !1)
                }
            },
            X = W,
            tt = (n("5c0b"), Object(N["a"])(X, i, r, !1, null, null, null)),
            et = tt.exports;
        a["a"].config.productionTip = !1, new a["a"]({
            render: function(t) {
                return t(et)
            }
        }).$mount("#app")
    },
    "5c0b": function(t, e, n) {
        "use strict";
        var o = n("1acb"),
            a = n.n(o);
        a.a
    },
    "6d48": function(t, e, n) {},
    "7be6": function(t, e, n) {},
    9226: function(t, e, n) {
        "use strict";
        var o = n("7be6"),
            a = n.n(o);
        a.a
    },
    "945a": function(t, e, n) {
        t.exports = n.p + "img/firebase-logo.c24b6b9c.png"
    },
    "95c7": function(t, e, n) {
        t.exports = n.p + "img/vue-logo.82b9c7a5.png"
    },
    a04e: function(t, e, n) {}
});