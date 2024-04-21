"use strict";
exports.id = 42;
exports.ids = [42];
exports.modules = {

/***/ 8042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FV": () => (/* binding */ navLinks),
/* harmony export */   "Jx": () => (/* binding */ contacts),
/* harmony export */   "nb": () => (/* binding */ skills),
/* harmony export */   "q": () => (/* binding */ projects)
/* harmony export */ });
/* unused harmony exports countUpItems, services */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_hi2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5774);
/* harmony import */ var react_icons_hi2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi2__WEBPACK_IMPORTED_MODULE_3__);




const navLinks = [
    {
        path: "/",
        label: "Home"
    },
    {
        path: "/about",
        label: "About"
    },
    {
        path: "/portfolio",
        label: "Portfolio"
    },
    {
        path: "/contact",
        label: "Contact"
    }
];
const services = [
    {
        id: 1,
        title: "UI/UX Design",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__.BsVectorPen, {}),
        finished: 113
    },
    {
        id: 2,
        title: "Web Developmemt",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__.BsCode, {}),
        finished: 209
    },
    {
        id: 3,
        title: "Web Research",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi2__WEBPACK_IMPORTED_MODULE_3__.HiMagnifyingGlass, {}),
        finished: 369
    },
    {
        id: 4,
        title: "Marketing",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiBarChart, {}),
        finished: 313
    }
];
const countUpItems = [
    {
        id: 1,
        number: 9,
        text: "Years of Experience"
    },
    {
        id: 2,
        number: 178,
        text: "Satisfied Customers"
    },
    {
        id: 3,
        number: 742,
        text: "Design Items"
    },
    {
        id: 4,
        number: 112,
        text: "Clients Served"
    }
];
const projects = [
    {
        id: 1,
        img: "/project5.png",
        name: "Portfolio",
        tools: [
            "Nextjs",
            "Tailwind",
            " Typescript"
        ],
        git: "https://github.com/erfajc97/Porfolio",
        link: "https://erickjimenezcruz.netlify.app/"
    },
    {
        id: 2,
        img: "/project1.png",
        name: "E-commers ",
        tools: [
            "React",
            "Sass",
            "Bootstrap",
            "CSS",
            "Redux"
        ],
        git: "https://github.com/erfajc97/e-commers",
        link: "https://iridescent-starlight-6f63da.netlify.app/"
    },
    {
        id: 4,
        img: "/project3.png",
        name: "App to exchange things or services, Cambialo",
        tools: [
            "React Native",
            "Redux-Toolkit",
            "Tailwind CSS",
            "Expo"
        ],
        git: "https://github.com/No-Country/c10-28-ft-reactchallenge-rn",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7056738971061485568/"
    },
    {
        id: 9,
        img: "/inventory.png",
        name: "Inventory",
        tools: [
            "React",
            " CSS",
            "Redux",
            "Ant D"
        ],
        git: "https://github.com/erfajc97/inventory",
        link: "https://store-inventorya-app.netlify.app/"
    },
    {
        id: 6,
        img: "/tickets.png",
        name: "Ticket creation and management",
        tools: [
            "React",
            " Ant D",
            "Redux"
        ],
        git: "https://github.com/erfajc97/Ticket",
        link: "https://ticketsflow.netlify.app/"
    },
    {
        id: 7,
        img: "/detail.png",
        name: "Detail Tickets",
        tools: [
            "React",
            " CSS",
            "Redux",
            "Ant D"
        ],
        git: "",
        link: "https://www.loom.com/share/f101d1f7f1bb4842aa37c00466e11533"
    },
    {
        id: 8,
        img: "/spaces.png",
        name: "Recreation of folder management like windows",
        tools: [
            "React",
            " CSS",
            "Redux",
            "Ant D"
        ],
        git: "",
        link: "https://www.loom.com/share/23fbe712f3b742c58d48a295ccd790d6"
    },
    {
        id: 3,
        img: "/project2.png",
        name: "React Pokedex",
        tools: [
            "React",
            " CSS",
            "Redux"
        ],
        git: "https://github.com/erfajc97/pokedex",
        link: "https://moonlit-biscochitos-61e833.netlify.app/"
    },
    {
        id: 5,
        img: "/project4.png",
        name: "Api Rick and Morty",
        tools: [
            "React",
            "Sass",
            " CSS"
        ],
        git: "https://github.com/erfajc97/apiRickandMorty",
        link: "https://neon-eclair-9386f3.netlify.app/"
    }
];
const skills = [
    {
        name: "HTML",
        level: 80
    },
    {
        name: "CSS",
        level: 70
    },
    {
        name: "JavaScript",
        level: 75
    },
    {
        name: "TypeScript",
        level: 60
    },
    {
        name: "ReactJS",
        level: 75
    },
    {
        name: "NextJS",
        level: 65
    },
    {
        name: "React Native",
        level: 70
    },
    {
        name: "Tailwind",
        level: 70
    },
    {
        name: "Bootstrap",
        level: 70
    },
    {
        name: "Nodejs",
        level: 70
    },
    {
        name: "Express",
        level: 70
    },
    {
        name: "Sequelize",
        level: 70
    }
];
const contacts = [
    {
        id: 1,
        title: "Address",
        text: "AR BS, EC GYE"
    },
    {
        id: 2,
        title: "Phones",
        text: "+5491176325093 +593978842711"
    },
    {
        id: 3,
        title: "Email",
        text: "erfajc97@gmail.com"
    }
];



/***/ })

};
;