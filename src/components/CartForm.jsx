import { useNavigate } from "react-router-dom";
import {
    collection,
    addDoc,
    getFirestore,
    serverTimestamp,
} from "firebase/firestore";
import { useState, useContext } from "react";
import { Form, Row, Col, InputGroup } from "react-bootstrap";

import { ProvContextoCarro } from "../context/EstadoCarroContexto";

const CartForm = () => {
    const { carro, asignarEstado, borrarCarro } = useContext(ProvContextoCarro);
    const navigate = useNavigate();

    const [validado, asignarValidacion] = useState(false);
    const [datosPedido, asignarDatosPedido] = useState("");

    const db = getFirestore();
    const coleccion = collection(db, "pedidos");
    //
    const abmDatosPedido = (elm) => {
        let pedidoModificado = { ...datosPedido };
        pedidoModificado[elm.getAttribute("name")] = elm.value;
        asignarDatosPedido(pedidoModificado);
    };

    const envioOrden = (ev) => {
        ev.preventDefault();
        const formulario = ev.currentTarget;
        if (formulario.checkValidity() === false) {
            ev.stopPropagation();
        } else {
            addDoc(coleccion, {
                datosPedido: datosPedido,
                pedido: carro,
                estado: 2,
                fecha: serverTimestamp(),
            }).then(({ id }) => {
                asignarEstado(2);
                borrarCarro();
                navigate(`/pedido/${id}`);
            });
        }
        asignarValidacion(true);
    };

    return (
        <div className="formularioPedido p-4 mt-4 border border-2 border-secondary rounded-4 col-12">
            <Form noValidate validated={validado} onSubmit={envioOrden}>
                <h3>Dejanos tus datos para completar el pedido</h3>
                <Form.Group>
                    <Row>
                        <Col lg={6} className="mt-4">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Juan"
                                name="nombre"
                                required
                                pattern=".[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ ]{2,50}"
                                title="de 2 a 50 caractéres"
                                defaultValue={""}
                                onChange={(ev) => {
                                    abmDatosPedido(ev.target);
                                }}
                            />
                        </Col>
                        <Col lg={6} className="mt-4">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Pérez"
                                name="apellido"
                                required
                                pattern=".[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ ]{2,50}"
                                title="de 2 a 50 caractéres"
                                onChange={(ev) => {
                                    abmDatosPedido(ev.target);
                                }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} className="mt-4">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                name="email"
                                required
                                onChange={(ev) => {
                                    abmDatosPedido(ev.target);
                                }}
                            />
                        </Col>
                        <Col lg={6} className="mt-4">
                            <Form.Label>Celular</Form.Label>
                            <InputGroup>
                                <Form.Select
                                    aria-label="Cod. País"
                                    type="number"
                                    placeholder="Cod. País"
                                    className="w-25"
                                    name="ddi"
                                    defaultValue={""}
                                    required
                                    onChange={(ev) => {
                                        abmDatosPedido(ev.target);
                                    }}
                                >
                                    <option value={""}>Seleccione</option>
                                    <option title="DZ" value="213">
                                        Algeria (+213)
                                    </option>
                                    <option title="AD" value="376">
                                        Andorra (+376)
                                    </option>
                                    <option title="AO" value="244">
                                        Angola (+244)
                                    </option>
                                    <option title="AI" value="1264">
                                        Anguilla (+1264)
                                    </option>
                                    <option title="AG" value="1268">
                                        Antigua &amp; Barbuda (+1268)
                                    </option>
                                    <option title="AR" value="54">
                                        Argentina (+54)
                                    </option>
                                    <option title="AM" value="374">
                                        Armenia (+374)
                                    </option>
                                    <option title="AW" value="297">
                                        Aruba (+297)
                                    </option>
                                    <option title="AU" value="61">
                                        Australia (+61)
                                    </option>
                                    <option title="AT" value="43">
                                        Austria (+43)
                                    </option>
                                    <option title="AZ" value="994">
                                        Azerbaijan (+994)
                                    </option>
                                    <option title="BS" value="1242">
                                        Bahamas (+1242)
                                    </option>
                                    <option title="BH" value="973">
                                        Bahrain (+973)
                                    </option>
                                    <option title="BD" value="880">
                                        Bangladesh (+880)
                                    </option>
                                    <option title="BB" value="1246">
                                        Barbados (+1246)
                                    </option>
                                    <option title="BY" value="375">
                                        Belarus (+375)
                                    </option>
                                    <option title="BE" value="32">
                                        Belgium (+32)
                                    </option>
                                    <option title="BZ" value="501">
                                        Belize (+501)
                                    </option>
                                    <option title="BJ" value="229">
                                        Benin (+229)
                                    </option>
                                    <option title="BM" value="1441">
                                        Bermuda (+1441)
                                    </option>
                                    <option title="BT" value="975">
                                        Bhutan (+975)
                                    </option>
                                    <option title="BO" value="591">
                                        Bolivia (+591)
                                    </option>
                                    <option title="BA" value="387">
                                        Bosnia Herzegovina (+387)
                                    </option>
                                    <option title="BW" value="267">
                                        Botswana (+267)
                                    </option>
                                    <option title="BR" value="55">
                                        Brazil (+55)
                                    </option>
                                    <option title="BN" value="673">
                                        Brunei (+673)
                                    </option>
                                    <option title="BG" value="359">
                                        Bulgaria (+359)
                                    </option>
                                    <option title="BF" value="226">
                                        Burkina Faso (+226)
                                    </option>
                                    <option title="BI" value="257">
                                        Burundi (+257)
                                    </option>
                                    <option title="KH" value="855">
                                        Cambodia (+855)
                                    </option>
                                    <option title="CM" value="237">
                                        Cameroon (+237)
                                    </option>
                                    <option title="CA" value="1">
                                        Canada (+1)
                                    </option>
                                    <option title="CV" value="238">
                                        Cape Verde Islands (+238)
                                    </option>
                                    <option title="KY" value="1345">
                                        Cayman Islands (+1345)
                                    </option>
                                    <option title="CF" value="236">
                                        Central African Republic (+236)
                                    </option>
                                    <option title="CL" value="56">
                                        Chile (+56)
                                    </option>
                                    <option title="CN" value="86">
                                        China (+86)
                                    </option>
                                    <option title="CO" value="57">
                                        Colombia (+57)
                                    </option>
                                    <option title="KM" value="269">
                                        Comoros (+269)
                                    </option>
                                    <option title="CG" value="242">
                                        Congo (+242)
                                    </option>
                                    <option title="CK" value="682">
                                        Cook Islands (+682)
                                    </option>
                                    <option title="CR" value="506">
                                        Costa Rica (+506)
                                    </option>
                                    <option title="HR" value="385">
                                        Croatia (+385)
                                    </option>
                                    <option title="CU" value="53">
                                        Cuba (+53)
                                    </option>
                                    <option title="CY" value="90392">
                                        Cyprus North (+90392)
                                    </option>
                                    <option title="CY" value="357">
                                        Cyprus South (+357)
                                    </option>
                                    <option title="CZ" value="42">
                                        Czech Republic (+42)
                                    </option>
                                    <option title="DK" value="45">
                                        Denmark (+45)
                                    </option>
                                    <option title="DJ" value="253">
                                        Djibouti (+253)
                                    </option>
                                    <option title="DM" value="1809">
                                        Dominica (+1809)
                                    </option>
                                    <option title="DO" value="1809">
                                        Dominican Republic (+1809)
                                    </option>
                                    <option title="EC" value="593">
                                        Ecuador (+593)
                                    </option>
                                    <option title="EG" value="20">
                                        Egypt (+20)
                                    </option>
                                    <option title="SV" value="503">
                                        El Salvador (+503)
                                    </option>
                                    <option title="GQ" value="240">
                                        Equatorial Guinea (+240)
                                    </option>
                                    <option title="ER" value="291">
                                        Eritrea (+291)
                                    </option>
                                    <option title="EE" value="372">
                                        Estonia (+372)
                                    </option>
                                    <option title="ET" value="251">
                                        Ethiopia (+251)
                                    </option>
                                    <option title="FK" value="500">
                                        Falkland Islands (+500)
                                    </option>
                                    <option title="FO" value="298">
                                        Faroe Islands (+298)
                                    </option>
                                    <option title="FJ" value="679">
                                        Fiji (+679)
                                    </option>
                                    <option title="FI" value="358">
                                        Finland (+358)
                                    </option>
                                    <option title="FR" value="33">
                                        France (+33)
                                    </option>
                                    <option title="GF" value="594">
                                        French Guiana (+594)
                                    </option>
                                    <option title="PF" value="689">
                                        French Polynesia (+689)
                                    </option>
                                    <option title="GA" value="241">
                                        Gabon (+241)
                                    </option>
                                    <option title="GM" value="220">
                                        Gambia (+220)
                                    </option>
                                    <option title="GE" value="7880">
                                        Georgia (+7880)
                                    </option>
                                    <option title="DE" value="49">
                                        Germany (+49)
                                    </option>
                                    <option title="GH" value="233">
                                        Ghana (+233)
                                    </option>
                                    <option title="GI" value="350">
                                        Gibraltar (+350)
                                    </option>
                                    <option title="GR" value="30">
                                        Greece (+30)
                                    </option>
                                    <option title="GL" value="299">
                                        Greenland (+299)
                                    </option>
                                    <option title="GD" value="1473">
                                        Grenada (+1473)
                                    </option>
                                    <option title="GP" value="590">
                                        Guadeloupe (+590)
                                    </option>
                                    <option title="GU" value="671">
                                        Guam (+671)
                                    </option>
                                    <option title="GT" value="502">
                                        Guatemala (+502)
                                    </option>
                                    <option title="GN" value="224">
                                        Guinea (+224)
                                    </option>
                                    <option title="GW" value="245">
                                        Guinea - Bissau (+245)
                                    </option>
                                    <option title="GY" value="592">
                                        Guyana (+592)
                                    </option>
                                    <option title="HT" value="509">
                                        Haiti (+509)
                                    </option>
                                    <option title="HN" value="504">
                                        Honduras (+504)
                                    </option>
                                    <option title="HK" value="852">
                                        Hong Kong (+852)
                                    </option>
                                    <option title="HU" value="36">
                                        Hungary (+36)
                                    </option>
                                    <option title="IS" value="354">
                                        Iceland (+354)
                                    </option>
                                    <option title="IN" value="91">
                                        India (+91)
                                    </option>
                                    <option title="ID" value="62">
                                        Indonesia (+62)
                                    </option>
                                    <option title="IR" value="98">
                                        Iran (+98)
                                    </option>
                                    <option title="IQ" value="964">
                                        Iraq (+964)
                                    </option>
                                    <option title="IE" value="353">
                                        Ireland (+353)
                                    </option>
                                    <option title="IL" value="972">
                                        Israel (+972)
                                    </option>
                                    <option title="IT" value="39">
                                        Italy (+39)
                                    </option>
                                    <option title="JM" value="1876">
                                        Jamaica (+1876)
                                    </option>
                                    <option title="JP" value="81">
                                        Japan (+81)
                                    </option>
                                    <option title="JO" value="962">
                                        Jordan (+962)
                                    </option>
                                    <option title="KZ" value="7">
                                        Kazakhstan (+7)
                                    </option>
                                    <option title="KE" value="254">
                                        Kenya (+254)
                                    </option>
                                    <option title="KI" value="686">
                                        Kiribati (+686)
                                    </option>
                                    <option title="KP" value="850">
                                        Korea North (+850)
                                    </option>
                                    <option title="KR" value="82">
                                        Korea South (+82)
                                    </option>
                                    <option title="KW" value="965">
                                        Kuwait (+965)
                                    </option>
                                    <option title="KG" value="996">
                                        Kyrgyzstan (+996)
                                    </option>
                                    <option title="LA" value="856">
                                        Laos (+856)
                                    </option>
                                    <option title="LV" value="371">
                                        Latvia (+371)
                                    </option>
                                    <option title="LB" value="961">
                                        Lebanon (+961)
                                    </option>
                                    <option title="LS" value="266">
                                        Lesotho (+266)
                                    </option>
                                    <option title="LR" value="231">
                                        Liberia (+231)
                                    </option>
                                    <option title="LY" value="218">
                                        Libya (+218)
                                    </option>
                                    <option title="LI" value="417">
                                        Liechtenstein (+417)
                                    </option>
                                    <option title="LT" value="370">
                                        Lithuania (+370)
                                    </option>
                                    <option title="LU" value="352">
                                        Luxembourg (+352)
                                    </option>
                                    <option title="MO" value="853">
                                        Macao (+853)
                                    </option>
                                    <option title="MK" value="389">
                                        Macedonia (+389)
                                    </option>
                                    <option title="MG" value="261">
                                        Madagascar (+261)
                                    </option>
                                    <option title="MW" value="265">
                                        Malawi (+265)
                                    </option>
                                    <option title="MY" value="60">
                                        Malaysia (+60)
                                    </option>
                                    <option title="MV" value="960">
                                        Maldives (+960)
                                    </option>
                                    <option title="ML" value="223">
                                        Mali (+223)
                                    </option>
                                    <option title="MT" value="356">
                                        Malta (+356)
                                    </option>
                                    <option title="MH" value="692">
                                        Marshall Islands (+692)
                                    </option>
                                    <option title="MQ" value="596">
                                        Martinique (+596)
                                    </option>
                                    <option title="MR" value="222">
                                        Mauritania (+222)
                                    </option>
                                    <option title="YT" value="269">
                                        Mayotte (+269)
                                    </option>
                                    <option title="MX" value="52">
                                        Mexico (+52)
                                    </option>
                                    <option title="FM" value="691">
                                        Micronesia (+691)
                                    </option>
                                    <option title="MD" value="373">
                                        Moldova (+373)
                                    </option>
                                    <option title="MC" value="377">
                                        Monaco (+377)
                                    </option>
                                    <option title="MN" value="976">
                                        Mongolia (+976)
                                    </option>
                                    <option title="MS" value="1664">
                                        Montserrat (+1664)
                                    </option>
                                    <option title="MA" value="212">
                                        Morocco (+212)
                                    </option>
                                    <option title="MZ" value="258">
                                        Mozambique (+258)
                                    </option>
                                    <option title="MN" value="95">
                                        Myanmar (+95)
                                    </option>
                                    <option title="NA" value="264">
                                        Namibia (+264)
                                    </option>
                                    <option title="NR" value="674">
                                        Nauru (+674)
                                    </option>
                                    <option title="NP" value="977">
                                        Nepal (+977)
                                    </option>
                                    <option title="NL" value="31">
                                        Netherlands (+31)
                                    </option>
                                    <option title="NC" value="687">
                                        New Caledonia (+687)
                                    </option>
                                    <option title="NZ" value="64">
                                        New Zealand (+64)
                                    </option>
                                    <option title="NI" value="505">
                                        Nicaragua (+505)
                                    </option>
                                    <option title="NE" value="227">
                                        Niger (+227)
                                    </option>
                                    <option title="NG" value="234">
                                        Nigeria (+234)
                                    </option>
                                    <option title="NU" value="683">
                                        Niue (+683)
                                    </option>
                                    <option title="NF" value="672">
                                        Norfolk Islands (+672)
                                    </option>
                                    <option title="NP" value="670">
                                        Northern Marianas (+670)
                                    </option>
                                    <option title="NO" value="47">
                                        Norway (+47)
                                    </option>
                                    <option title="OM" value="968">
                                        Oman (+968)
                                    </option>
                                    <option title="PW" value="680">
                                        Palau (+680)
                                    </option>
                                    <option title="PA" value="507">
                                        Panama (+507)
                                    </option>
                                    <option title="PG" value="675">
                                        Papua New Guinea (+675)
                                    </option>
                                    <option title="PY" value="595">
                                        Paraguay (+595)
                                    </option>
                                    <option title="PE" value="51">
                                        Peru (+51)
                                    </option>
                                    <option title="PH" value="63">
                                        Philippines (+63)
                                    </option>
                                    <option title="PL" value="48">
                                        Poland (+48)
                                    </option>
                                    <option title="PT" value="351">
                                        Portugal (+351)
                                    </option>
                                    <option title="PR" value="1787">
                                        Puerto Rico (+1787)
                                    </option>
                                    <option title="QA" value="974">
                                        Qatar (+974)
                                    </option>
                                    <option title="RE" value="262">
                                        Reunion (+262)
                                    </option>
                                    <option title="RO" value="40">
                                        Romania (+40)
                                    </option>
                                    <option title="RU" value="7">
                                        Russia (+7)
                                    </option>
                                    <option title="RW" value="250">
                                        Rwanda (+250)
                                    </option>
                                    <option title="SM" value="378">
                                        San Marino (+378)
                                    </option>
                                    <option title="ST" value="239">
                                        Sao Tome &amp; Principe (+239)
                                    </option>
                                    <option title="SA" value="966">
                                        Saudi Arabia (+966)
                                    </option>
                                    <option title="SN" value="221">
                                        Senegal (+221)
                                    </option>
                                    <option title="CS" value="381">
                                        Serbia (+381)
                                    </option>
                                    <option title="SC" value="248">
                                        Seychelles (+248)
                                    </option>
                                    <option title="SL" value="232">
                                        Sierra Leone (+232)
                                    </option>
                                    <option title="SG" value="65">
                                        Singapore (+65)
                                    </option>
                                    <option title="SK" value="421">
                                        Slovak Republic (+421)
                                    </option>
                                    <option title="SI" value="386">
                                        Slovenia (+386)
                                    </option>
                                    <option title="SB" value="677">
                                        Solomon Islands (+677)
                                    </option>
                                    <option title="SO" value="252">
                                        Somalia (+252)
                                    </option>
                                    <option title="ZA" value="27">
                                        South Africa (+27)
                                    </option>
                                    <option title="ES" value="34">
                                        Spain (+34)
                                    </option>
                                    <option title="LK" value="94">
                                        Sri Lanka (+94)
                                    </option>
                                    <option title="SH" value="290">
                                        St. Helena (+290)
                                    </option>
                                    <option title="KN" value="1869">
                                        St. Kitts (+1869)
                                    </option>
                                    <option title="SC" value="1758">
                                        St. Lucia (+1758)
                                    </option>
                                    <option title="SD" value="249">
                                        Sudan (+249)
                                    </option>
                                    <option title="SR" value="597">
                                        Suriname (+597)
                                    </option>
                                    <option title="SZ" value="268">
                                        Swaziland (+268)
                                    </option>
                                    <option title="SE" value="46">
                                        Sweden (+46)
                                    </option>
                                    <option title="CH" value="41">
                                        Switzerland (+41)
                                    </option>
                                    <option title="SI" value="963">
                                        Syria (+963)
                                    </option>
                                    <option title="TW" value="886">
                                        Taiwan (+886)
                                    </option>
                                    <option title="TJ" value="7">
                                        Tajikstan (+7)
                                    </option>
                                    <option title="TH" value="66">
                                        Thailand (+66)
                                    </option>
                                    <option title="TG" value="228">
                                        Togo (+228)
                                    </option>
                                    <option title="TO" value="676">
                                        Tonga (+676)
                                    </option>
                                    <option title="TT" value="1868">
                                        Trinidad &amp; Tobago (+1868)
                                    </option>
                                    <option title="TN" value="216">
                                        Tunisia (+216)
                                    </option>
                                    <option title="TR" value="90">
                                        Turkey (+90)
                                    </option>
                                    <option title="TM" value="7">
                                        Turkmenistan (+7)
                                    </option>
                                    <option title="TM" value="993">
                                        Turkmenistan (+993)
                                    </option>
                                    <option title="TC" value="1649">
                                        Turks &amp; Caicos Islands (+1649)
                                    </option>
                                    <option title="TV" value="688">
                                        Tuvalu (+688)
                                    </option>
                                    <option title="UG" value="256">
                                        Uganda (+256)
                                    </option>
                                    <option title="UA" value="380">
                                        Ukraine (+380)
                                    </option>
                                    <option title="AE" value="971">
                                        United Arab Emirates (+971)
                                    </option>
                                    <option title="GB" value="44">
                                        UK (+44)
                                    </option>
                                    <option title="UY" value="598">
                                        Uruguay (+598)
                                    </option>
                                    <option title="US" value="1">
                                        USA (+1)
                                    </option>
                                    <option title="UZ" value="7">
                                        Uzbekistan (+7)
                                    </option>
                                    <option title="VU" value="678">
                                        Vanuatu (+678)
                                    </option>
                                    <option title="VA" value="379">
                                        Vatican City (+379)
                                    </option>
                                    <option title="VE" value="58">
                                        Venezuela (+58)
                                    </option>
                                    <option title="VN" value="84">
                                        Vietnam (+84)
                                    </option>
                                    <option title="VG" value="84">
                                        Virgin Islands - British (+1284)
                                    </option>
                                    <option title="VI" value="84">
                                        Virgin Islands - US (+1340)
                                    </option>
                                    <option title="WF" value="681">
                                        Wallis &amp; Futuna (+681)
                                    </option>
                                    <option title="YE" value="969">
                                        Yemen (North)(+969)
                                    </option>
                                    <option title="YE" value="967">
                                        Yemen (South)(+967)
                                    </option>
                                    <option title="ZM" value="260">
                                        Zambia (+260)
                                    </option>
                                    <option title="ZW" value="263">
                                        Zimbabwe (+263)
                                    </option>
                                </Form.Select>
                                <Form.Control
                                    type="text"
                                    placeholder="Cod. Área"
                                    className="w-25"
                                    name="cca"
                                    required
                                    pattern="[0-9]{2,4}"
                                    title="de 2 a 4 dígitos"
                                    onChange={(ev) => {
                                        abmDatosPedido(ev.target);
                                    }}
                                />
                                <Form.Control
                                    type="text"
                                    placeholder="Número"
                                    className="w-50"
                                    name="cnum"
                                    required
                                    pattern="[0-9]{4,8}"
                                    title="de 4 a 6 dígitos"
                                    onChange={(ev) => {
                                        abmDatosPedido(ev.target);
                                    }}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-4 fw-bold fs-4">
                            Dirección de entrega
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={2} className="mt-4">
                            <Form.Label>Código postal</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="1234"
                                name="cp"
                                required
                                pattern="[0-9]{4,6}"
                                title="de 4 a 6 dígitos"
                                onChange={(ev) => {
                                    abmDatosPedido(ev.target);
                                }}
                            />
                        </Col>
                        <Col lg={5} className="mt-4">
                            <Form.Label>Provincia</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Buenos Aires"
                                name="provincia"
                                required
                                pattern=".[0-9a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ ]{2,50}"
                                title="de 2 a 50 caractéres"
                                onChange={(ev) => {
                                    abmDatosPedido(ev.target);
                                }}
                            />
                        </Col>
                        <Col lg={5} className="mt-4">
                            <Form.Label>Localidad</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Moreno"
                                name="localidad"
                                required
                                pattern=".[0-9a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ ]{2,50}"
                                title="de 2 a 50 caractéres"
                                onChange={(ev) => {
                                    abmDatosPedido(ev.target);
                                }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} className="mt-4">
                            <Form.Label>Dirección</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="Calle"
                                    className="w-50"
                                    name="calle"
                                    required
                                    pattern=".[0-9a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ ]{2,50}"
                                    title="de 2 a 50 caractéres"
                                    onChange={(ev) => {
                                        abmDatosPedido(ev.target);
                                    }}
                                />
                                <Form.Control
                                    type="number"
                                    placeholder="Número"
                                    className="w-25"
                                    name="calleNum"
                                    onChange={(ev) => {
                                        abmDatosPedido(ev.target);
                                    }}
                                />
                                <Form.Control
                                    type="text"
                                    placeholder="Piso/Departamento (opcional)"
                                    className="w-25"
                                    name="piso"
                                    onChange={(ev) => {
                                        abmDatosPedido(ev.target);
                                    }}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} className="mt-4">
                            <Form.Label>
                                Información adicional (opcional)
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Descripción de la fachada, puntos de referencia para encontrarla, indicaciones de seguridad, etc."
                                className="w-100"
                                name="obs"
                                pattern="{3,200}"
                                title="de 2 a 200 caractéres"
                                onChange={(ev) => {
                                    abmDatosPedido(ev.target);
                                }}
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <div className="d-grid gap-2 mt-4">
                    <input
                        className="btn btn-lg btn-primary"
                        type="submit"
                        value="Enviar"
                    />
                </div>
            </Form>
        </div>
    );
};

export default CartForm;
