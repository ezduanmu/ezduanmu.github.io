const data = {
  first_name: "Eric",
  last_name: "Duanmu",
  full_name: function () {
    return this.first_name + " " + this.last_name;
  },
  school_name: "Tufts University",
  major: "Computer Science",
  degree_type: "B.S.",
  occupation: "student",
  image: "", // TODO
  interests: [],
};

export default data;
