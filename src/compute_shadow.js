/* Cast shadow outside of the object without affecting any existing shadow 

    lx = horizantal shadow length ( -ve value cast the shadow to the left of the object ) 
    ly = vertical shadow length ( -ve value cast the shadow to the top of the object ) 
*/

function frame_css_property_as_str(key, value) {
  var out = "";
  if (key === "content") {
    out = key + ":" + "'" + value + "'" + ";";
  } else {
    out = key + ":" + value + ";";
  }
  return out;
}

/*
      rule_name => string => ""#box_object1:before"" => selectror can be a pseudo property
      rule_property => an Object in (key, value) format representing CSS property
  */

function add_css_rule(rule_name, rule_property) {
  property_str = "";
  style = document.createElement("style");
  var sheet = document.head.appendChild(style).sheet;

  key_array = Object.keys(rule_property);
  for (var i = 0; i < key_array.length; i++) {
    k = key_array[i];
    v = rule_property[k];
    property_str += frame_css_property_as_str(k, v);
  }

  sheet.insertRule(rule_name + "{" + property_str + "}", sheet.cssRules.length);
}

/* BUG : Not Working

function disable_css_rule(css_selector) {
  add_css_rule(css_selector, {
    content: "none",
  });
}

function enable_css_rule(css_selector) {
  add_css_rule(css_selector, {
    content: "",
  });
}
*/

function cast_shadow_outside(
  id,
  lx,
  ly,
  blur_radius,
  border_radius,
  shaodw_color
) {
  existing_value = "";
  e = document.getElementById(id);
  v_x = lx.toString() + "px";
  v_y = ly.toString() + "px";
  v_b = blur_radius.toString() + "px";
  v_c = shaodw_color.toString();

  if (e.style.boxShadow != "") {
    existing_value = e.style.boxShadow + ", ";
  }

  sh_val = v_x + " " + v_y + " " + v_b + " " + v_c;

  new_value = existing_value + sh_val;

  attr = "box-shadow : " + new_value + ";";
  attr += "border-radius : " + border_radius.toString() + "px" + ";";

  old_attr = e.getAttribute("style");
  if (old_attr != null) {
    attr = old_attr + attr;
  }

  e.setAttribute("style", attr);
}

/* Cast shadow on the left outside of the object without affecting any existing shadow 

    shadow_len =  shadow length 
*/

function cast_shadow_left_outside(id, shadow_len, blur_radius, shaodw_color) {
  existing_value = "";
  e = document.getElementById(id);
  shadow_length_int = shadow_len * -1;
  v_x = shadow_length_int.toString() + "px";
  v_y = "0" + "px";
  v_b = blur_radius.toString() + "px";
  v_c = shaodw_color.toString();

  if (e.style.boxShadow != "") {
    existing_value = e.style.boxShadow + ", ";
  }

  sh_val = v_x + " " + v_y + " " + v_b + " " + v_c;

  new_value = existing_value + sh_val;

  old_attr = e.getAttribute("style");
  if (old_attr != null) {
    attr = old_attr + attr;
  }

  attr = "box-shadow : " + new_value;
  e.setAttribute("style", attr);
}

/* Cast shadow on the right outside of the object without affecting any existing shadow 

    shadow_len =  shadow length 
*/
function cast_shadow_right_outside(id, shadow_len, blur_radius, shaodw_color) {
  existing_value = "";
  e = document.getElementById(id);
  shadow_length_int = shadow_len;
  v_x = shadow_length_int.toString() + "px";
  v_y = "0" + "px";
  v_b = blur_radius.toString() + "px";
  v_c = shaodw_color.toString();

  if (e.style.boxShadow != "") {
    existing_value = e.style.boxShadow + ", ";
  }

  sh_val = v_x + " " + v_y + " " + v_b + " " + v_c;

  new_value = existing_value + sh_val;

  old_attr = e.getAttribute("style");
  if (old_attr != null) {
    attr = old_attr + attr;
  }

  attr = "box-shadow : " + new_value;
  e.setAttribute("style", attr);
}

/* Cast shadow on the top outside of the object without affecting any existing shadow 

    shadow_len =  shadow length 
*/
function cast_shadow_top_outside(id, shadow_len, blur_radius, shaodw_color) {
  existing_value = "";
  e = document.getElementById(id);
  shadow_length_int = shadow_len * -1;
  v_x = "0" + "px";
  v_y = shadow_length_int.toString() + "px";
  v_b = blur_radius.toString() + "px";
  v_c = shaodw_color.toString();

  if (e.style.boxShadow != "") {
    existing_value = e.style.boxShadow + ", ";
  }

  sh_val = v_x + " " + v_y + " " + v_b + " " + v_c;

  new_value = existing_value + sh_val;

  old_attr = e.getAttribute("style");
  if (old_attr != null) {
    attr = old_attr + attr;
  }

  attr = "box-shadow : " + new_value;
  e.setAttribute("style", attr);
}

/* Cast shadow on the bottom outside of the object without affecting any existing shadow 

    shadow_len =  shadow length 
*/
function cast_shadow_bottom_outside(
  id,
  shadow_len,
  blur_radius,
  border_radius,
  shaodw_color
) {
  existing_value = "";
  e = document.getElementById(id);
  shadow_length_int = shadow_len;
  v_x = "0" + "px";
  v_y = shadow_length_int.toString() + "px";
  v_b = blur_radius.toString() + "px";
  v_c = shaodw_color.toString();

  if (e.style.boxShadow != "") {
    existing_value = e.style.boxShadow + ", ";
  }

  sh_val = v_x + " " + v_y + " " + v_b + " " + v_c;

  new_value = existing_value + sh_val;

  attr = "box-shadow : " + new_value + ";";
  attr += "border-radius : " + border_radius.toString() + "px" + ";";

  old_attr = e.getAttribute("style");
  if (old_attr != null) {
    attr = old_attr + attr;
  }

  e.setAttribute("style", attr);
}

/* Cast shadow inside of the object without affecting any existing shadow 

    lx = horizantal shadow length ( -ve value cast the shadow to the left of the object ) 
    ly = vertical shadow length ( -ve value cast the shadow to the top of the object ) 
*/

function cast_shadow_inside(
  id,
  lx,
  ly,
  blur_radius,
  border_radius,
  shaodw_color
) {
  existing_value = "";
  e = document.getElementById(id);
  v_x = lx.toString() + "px";
  v_y = ly.toString() + "px";
  v_b = blur_radius.toString() + "px";
  v_c = shaodw_color.toString();

  if (e.style.boxShadow != "") {
    existing_value = e.style.boxShadow + ", ";
  }

  sh_val = "inset" + " " + v_x + " " + v_y + " " + v_b + " " + v_c;

  new_value = existing_value + sh_val;

  attr = "box-shadow : " + new_value + ";";
  attr += "border-radius : " + border_radius.toString() + "px" + ";";

  old_attr = e.getAttribute("style");
  if (old_attr != null) {
    attr = old_attr + attr;
  }

  e.setAttribute("style", attr);
}

function cast_shadow_left_inside(id, shadow_len, blur_radius, shaodw_color) {
  existing_value = "";
  e = document.getElementById(id);
  shadow_length_int = shadow_len * 1;
  v_x = shadow_length_int.toString() + "px";
  v_y = "0" + "px";
  v_b = blur_radius.toString() + "px";
  v_c = shaodw_color.toString();

  if (e.style.boxShadow != "") {
    existing_value = e.style.boxShadow + ", ";
  }

  sh_val = "inset" + " " + v_x + " " + v_y + " " + v_b + " " + v_c;

  new_value = existing_value + sh_val;
  old_attr = e.getAttribute("style");
  if (old_attr != null) {
    attr = old_attr + attr;
  }
  attr = "box-shadow : " + new_value;
  e.setAttribute("style", attr);
}

function cast_shadow_right_inside(id, shadow_len, blur_radius, shaodw_color) {
  existing_value = "";
  e = document.getElementById(id);
  shadow_length_int = shadow_len * -1;
  v_x = shadow_length_int.toString() + "px";
  v_y = "0" + "px";
  v_b = blur_radius.toString() + "px";
  v_c = shaodw_color.toString();

  if (e.style.boxShadow != "") {
    existing_value = e.style.boxShadow + ", ";
  }

  sh_val = "inset" + " " + v_x + " " + v_y + " " + v_b + " " + v_c;

  new_value = existing_value + sh_val;

  old_attr = e.getAttribute("style");
  if (old_attr != null) {
    attr = old_attr + attr;
  }

  attr = "box-shadow : " + new_value;
  e.setAttribute("style", attr);
}

function cast_shadow_top_inside(id, shadow_len, blur_radius, shaodw_color) {
  existing_value = "";
  e = document.getElementById(id);
  shadow_length_int = shadow_len * 1;
  v_y = shadow_length_int.toString() + "px";
  v_x = "0" + "px";
  v_b = blur_radius.toString() + "px";
  v_c = shaodw_color.toString();

  if (e.style.boxShadow != "") {
    existing_value = e.style.boxShadow + ", ";
  }

  sh_val = "inset" + " " + v_x + " " + v_y + " " + v_b + " " + v_c;

  new_value = existing_value + sh_val;

  old_attr = e.getAttribute("style");
  if (old_attr != null) {
    attr = old_attr + attr;
  }

  attr = "box-shadow : " + new_value;
  e.setAttribute("style", attr);
}

function cast_shadow_bottom_inside(id, shadow_len, blur_radius, shaodw_color) {
  existing_value = "";
  e = document.getElementById(id);
  shadow_length_int = shadow_len * -1;
  v_y = shadow_length_int.toString() + "px";
  v_x = "0" + "px";
  v_b = blur_radius.toString() + "px";
  v_c = shaodw_color.toString();

  if (e.style.boxShadow != "") {
    existing_value = e.style.boxShadow + ", ";
  }

  sh_val = "inset" + " " + v_x + " " + v_y + " " + v_b + " " + v_c;

  new_value = existing_value + sh_val;

  old_attr = e.getAttribute("style");
  if (old_attr != null) {
    attr = old_attr + attr;
  }

  attr = "box-shadow : " + new_value;
  e.setAttribute("style", attr);
}

function create_css_element(element_name) {
  style = document.createElement("style");
  document.head.appendChild(style);
  attr_val = "content" + ":" + "";
  style.sheet.addRule(element_name, attr_val);
  return style;
}

function set_style(element, qs, property, value) {
  e = window.getComputedStyle(
    document.querySelector("#box_object1"),
    ":before"
  );

  attr_val = property + ":" + value;
  e.setProperty(property, value);
  //element.style("style", attr_val);
}

function cast_shadow_bottom_right_corner_outside(
  id,
  blur_radius,
  shadow_color
) {
  element = document.getElementById(id);

  skew_degree = 7; /* 6 degrees */
  s_blur_r = "blur(" + blur_radius.toString() + "px" + ")";
  css_selector = "#" + id + ":" + "before";
  s_bottom = "10px"; /*10px*/
  s_left = "10%"; /* 10%*/
  s_width = "90%"; /* 90%*/
  s_height = "25%"; /*50px */
  s_degree = "skewY(" + skew_degree.toString() + "deg)";
  s_position = "absolute";

  add_css_rule(css_selector, {
    content: "",
    position: s_position,
    bottom: s_bottom,
    left: s_left,
    width: s_width,
    height: s_height,
    background: shadow_color,
    "transform-origin": "left",
    transform: s_degree,
    "z-index": "-1",
    filter: s_blur_r,
  });
}

function cast_shadow_bottom_left_corner_outside(id, blur_radius, shadow_color) {
  element = document.getElementById(id);

  skew_degree = -8; /* -8 degrees */
  s_blur_r = "blur(" + blur_radius.toString() + "px" + ")";
  css_selector = "#" + id + ":" + "before";
  s_bottom = "0"; /*0*/
  s_left = "0"; /* 0*/
  s_width = "50%"; /* 50%*/
  s_height = "15%"; /*30px */
  s_degree = "skewY(" + skew_degree.toString() + "deg)";
  s_position = "absolute";

  add_css_rule(css_selector, {
    content: "",
    position: s_position,
    bottom: s_bottom,
    left: s_left,
    width: s_width,
    height: s_height,
    background: shadow_color,
    "transform-origin": "right",
    transform: s_degree,
    "z-index": "-1",
    filter: s_blur_r,
  });
}

function clear_corner_shadows_outside(id) {
  element = document.getElementById(id);

  skew_degree = 0; /* -8 degrees */
  s_blur_r = "blur(" + "0" + "px" + ")";
  css_selector = "#" + id + ":" + "before";
  s_bottom = "0"; /*0*/
  s_left = "0"; /* 0*/
  s_width = "0"; /* 50%*/
  s_height = "0"; /*30px */
  s_degree = "skewY(" + skew_degree.toString() + "deg)";
  s_position = "absolute";

  add_css_rule(css_selector, {
    content: "",
    position: s_position,
    bottom: s_bottom,
    left: s_left,
    width: s_width,
    height: s_height,
    background: "rgba(255, 255, 255, 0.1)",
    "transform-origin": "right",
    transform: s_degree,
    "z-index": "-1",
    filter: s_blur_r,
    "border-radius": 0,
  });

  css_selector = "#" + id + ":" + "after";
  add_css_rule(css_selector, {
    content: "",
    position: s_position,
    bottom: s_bottom,
    left: s_left,
    width: s_width,
    height: s_height,
    background: "rgba(255, 255, 255, 0.1)",
    "transform-origin": "right",
    transform: s_degree,
    "z-index": "-1",
    filter: s_blur_r,
    "border-radius": 0,
  });
}

function cash_round_shadow_bottom_outside(id, blur_radius, shadow_color) {
  element = document.getElementById(id);
  css_selector = "#" + id + ":" + "after";

  s_blur_r = "blur(" + blur_radius.toString() + "px" + ")"; /* 5px */
  s_bottom = "-40px"; /*Move shadow away from the object => -50px*/
  s_left = "5%"; /* Move shadow in x axis => 5%*/
  s_width = "90%"; /* 50%*/
  s_height = "10%"; /*round shadow disc visibility => 20px */
  s_position = "absolute";
  s_transform = "right";
  s_z_index = "-1";
  s_border_r = "50%"; /* shadow radius lesser number make the shadow rectangle*/

  add_css_rule(css_selector, {
    content: "",
    position: s_position,
    bottom: s_bottom,
    left: s_left,
    width: s_width,
    height: s_height,
    background: shadow_color,
    "transform-origin": s_transform,
    "border-radius": s_border_r,
    "z-index": s_z_index,
    filter: s_blur_r,
  });
}

function cash_rectangular_shadow_bottom_outside(id, blur_radius, shadow_color) {
  element = document.getElementById(id);
  css_selector = "#" + id + ":" + "after";

  s_blur_r = "blur(" + blur_radius.toString() + "px" + ")"; /* 10px */
  s_bottom = "-15%"; /*Grow shadow away from the object => -15px*/
  s_left = "5%"; /* Move shadow in x axis ( towards right if positive )=> 5%*/
  s_width = "90%"; /* Width of shadow 90%*/
  s_height = "90%"; /*height of shadow > 90% */
  s_position = "absolute";
  s_z_index = "-1"; /* Shadow behind object */

  add_css_rule(css_selector, {
    content: "",
    position: s_position,
    bottom: s_bottom,
    left: s_left,
    width: s_width,
    height: s_height,
    background: shadow_color,
    "z-index": s_z_index,
    filter: s_blur_r,
  });
}

function bg_color(id, color) {
  e = document.getElementById(id);
  attr = "background : " + color + ";";
  e.setAttribute("style", attr);
}

/* Clear all shadows for the object */
/* BUG: Doesn't clear pseudo elements like ::before and ::after */
function clear_shadow(id) {
  e = document.getElementById(id);
  e.style.boxShadow = "";
  clear_corner_shadows_outside(id);
  //disable_css_rule("#box_object1::before");
  //disable_css_rule("#box_object1::after");
  //enable_css_rule("#box_object1:after");
  //enable_css_rule("#box_object1:before");
}

function cash_shadow_like_button() {
  shadow_color1 = "rgba(0, 0, 0, 0.1)";
  shadow_color2 = "rgba(255, 255, 255, 0.2)";
  bg_color("box_object1", "#dacd21");
  cast_shadow_inside("box_object1", 5, 5, 5, 15, shadow_color1);
  cast_shadow_inside("box_object1", -5, -5, 5, 15, shadow_color2);
  cast_shadow_outside("box_object1", 15, 15, 15, 15, shadow_color1);
  cast_shadow_outside("box_object1", -15, -15, 15, 15, shadow_color2);
}

function cash_shadow_type_1() {
  shadow_color1 = "rgba(0, 0, 0, 0.1)";
  shadow_color2 = "rgba(255, 255, 255, 0.2)";
  bg_color("box_object1", "#dacd21");
  cast_shadow_outside("box_object1", 15, 15, 15, 15, shadow_color1);
  cast_shadow_outside("box_object1", -15, -15, 15, 15, shadow_color2);
}

function update_inner_text(id, text) {
  e = document.getElementById(id);
  e.innerHTML = text;
}

function Sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

shadow_color = "rgba(0, 0, 0, 0.3)";
shadow_color1 = "rgba(0, 0, 0, 0.1)";
shadow_color2 = "rgba(255, 255, 255, 0.2)";

sleep1 = 1000;
sleep2 = 500;
async function shadow_demo() {
  update_inner_text("box_object1", "shadow | inside");
  cast_shadow_inside("box_object1", 15, 15, 15, 0, shadow_color);
  await Sleep(sleep1);
  clear_shadow("box_object1");
  await Sleep(sleep2);

  update_inner_text("box_object1", "shadow | outside");
  cast_shadow_outside("box_object1", 15, 15, 15, 0, shadow_color);
  await Sleep(sleep1);
  clear_shadow("box_object1");
  await Sleep(sleep2);

  update_inner_text("box_object1", "shadow | outside");
  cast_shadow_outside("box_object1", 0, 0, 10, 0, shadow_color);
  await Sleep(sleep1);
  clear_shadow("box_object1");
  await Sleep(sleep2);

  update_inner_text("box_object1", "shadow | inside");
  cast_shadow_inside("box_object1", 10, 10, 10, 0, shadow_color);
  await Sleep(sleep1);
  clear_shadow("box_object1");
  await Sleep(sleep2);

  update_inner_text("box_object1", "shadow | inside");
  cast_shadow_inside("box_object1", -10, -10, 10, 0, shadow_color);
  await Sleep(sleep1);
  clear_shadow("box_object1");
  await Sleep(sleep2);

  update_inner_text("box_object1", "shadow | outside | left ");
  cast_shadow_left_outside("box_object1", 10, 20, shadow_color);
  await Sleep(sleep1);
  clear_shadow("box_object1");
  await Sleep(sleep2);

  update_inner_text("box_object1", "shadow | outside | right ");
  cast_shadow_right_outside("box_object1", 10, 20, shadow_color);
  await Sleep(sleep1);
  clear_shadow("box_object1");
  await Sleep(sleep2);

  update_inner_text("box_object1", "shadow | outside | top ");
  cast_shadow_top_outside("box_object1", 10, 20, shadow_color);
  await Sleep(sleep1);
  clear_shadow("box_object1");
  await Sleep(sleep2);

  update_inner_text("box_object1", "shadow | outside | bottom ");
  cast_shadow_bottom_outside("box_object1", 10, 20, 0, shadow_color);
  await Sleep(sleep1);
  clear_shadow("box_object1");
  await Sleep(sleep2);

  update_inner_text("box_object1", "shadow | inside | left ");
  cast_shadow_left_inside("box_object1", 10, 20, shadow_color);
  await Sleep(sleep1);
  clear_shadow("box_object1");
  await Sleep(sleep2);

  update_inner_text("box_object1", "shadow | inside | right ");
  cast_shadow_right_inside("box_object1", 10, 20, shadow_color);
  await Sleep(sleep1);
  clear_shadow("box_object1");
  await Sleep(sleep2);

  update_inner_text("box_object1", "shadow | inside | top ");
  cast_shadow_top_inside("box_object1", 10, 20, shadow_color);
  await Sleep(sleep1);
  clear_shadow("box_object1");
  await Sleep(sleep2);

  update_inner_text(
    "box_object1",
    "shadow | bottom | right | corner | outside "
  );
  cast_shadow_bottom_right_corner_outside("box_object1", 5, shadow_color);
  await Sleep(sleep1);
  clear_shadow("box_object1");
  await Sleep(sleep2);

  update_inner_text(
    "box_object1",
    "shadow | bottom | left | corner | outside "
  );
  cast_shadow_bottom_left_corner_outside("box_object1", 5, shadow_color);
  await Sleep(sleep1);
  clear_shadow("box_object1");
  await Sleep(sleep2);

  update_inner_text("box_object1", "shadow | button ");
  cash_shadow_like_button();
  await Sleep(sleep1);
  clear_shadow("box_object1");
  await Sleep(sleep2);
  bg_color("box_object1", "#fff");

  update_inner_text("box_object1", "shadow | type1 ");
  cash_shadow_type_1();
  await Sleep(sleep1);
  clear_shadow("box_object1");
  await Sleep(sleep2);
  bg_color("box_object1", "#fff");

  update_inner_text("box_object1", "shadow | bottom | round | outside ");
  cash_round_shadow_bottom_outside("box_object1", 5, shadow_color);
  await Sleep(sleep1);
  clear_shadow("box_object1");
  await Sleep(sleep2);

  update_inner_text("box_object1", "shadow | bottom | rectangle | outside ");
  cash_rectangular_shadow_bottom_outside("box_object1", 10, shadow_color);
  await Sleep(sleep1);
  clear_shadow("box_object1");
  await Sleep(sleep2);
}

shadow_demo();
