<template>
	<el-card>
		<p>本字符实体参考手册包括了数学符号、希腊字符、各种箭头记号、科技符号以及形状。</p>
		<p><strong>注释</strong>：实体名称对大小写敏感。</p>
		<el-divider></el-divider>
		<h4>HTML 支持的数学符号</h4>
		<table class="el-table">
			<tbody>
				<tr>
					<th style="width:10%;">结果</th>
					<th style="width:50%;">描述</th>
					<th style="width:20%;">实体名称</th>
					<th style="width:20%;">实体编号</th>
				</tr>
				<tr>
					<td>∀</td>
					<td>for all</td>

					<td>&amp;forall;</td>
					<td>&amp;#8704;</td>
				</tr>
				<tr>
					<td>∂</td>
					<td>part</td>
					<td>&amp;part;</td>

					<td>&amp;#8706;</td>
				</tr>
				<tr>
					<td>∃</td>
					<td>exists</td>
					<td>&amp;exists;</td>
					<td>&amp;#8707;</td>

				</tr>
				<tr>
					<td>∅</td>
					<td>empty</td>
					<td>&amp;empty;</td>
					<td>&amp;#8709;</td>
				</tr>

				<tr>
					<td>∇</td>
					<td>nabla</td>
					<td>&amp;nabla;</td>
					<td>&amp;#8711;</td>
				</tr>
				<tr>

					<td>∈</td>
					<td>isin</td>
					<td>&amp;isin;</td>
					<td>&amp;#8712;</td>
				</tr>
				<tr>
					<td>∉</td>

					<td>notin</td>
					<td>&amp;notin;</td>
					<td>&amp;#8713;</td>
				</tr>
				<tr>
					<td>∋</td>
					<td>ni</td>

					<td>&amp;ni;</td>
					<td>&amp;#8715;</td>
				</tr>
				<tr>
					<td>∏</td>
					<td>prod</td>
					<td>&amp;prod;</td>

					<td>&amp;#8719;</td>
				</tr>
				<tr>
					<td>∑</td>
					<td>sum</td>
					<td>&amp;sum;</td>
					<td>&amp;#8721;</td>

				</tr>
				<tr>
					<td>−</td>
					<td>minus</td>
					<td>&amp;minus;</td>
					<td>&amp;#8722;</td>
				</tr>

				<tr>
					<td>∗</td>
					<td>lowast</td>
					<td>&amp;lowast;</td>
					<td>&amp;#8727;</td>
				</tr>
				<tr>

					<td>√</td>
					<td>square root</td>
					<td>&amp;radic;</td>
					<td>&amp;#8730;</td>
				</tr>
				<tr>
					<td>∝</td>

					<td>proportional to</td>
					<td>&amp;prop;</td>
					<td>&amp;#8733;</td>
				</tr>
				<tr>
					<td>∞</td>
					<td>infinity</td>

					<td>&amp;infin;</td>
					<td>&amp;#8734;</td>
				</tr>
				<tr>
					<td>∠</td>
					<td>angle</td>
					<td>&amp;ang;</td>

					<td>&amp;#8736;</td>
				</tr>
				<tr>
					<td>∧</td>
					<td>and</td>
					<td>&amp;and;</td>
					<td>&amp;#8743;</td>

				</tr>
				<tr>
					<td>∨</td>
					<td>or</td>
					<td>&amp;or;</td>
					<td>&amp;#8744;</td>
				</tr>

				<tr>
					<td>∩</td>
					<td>cap</td>
					<td>&amp;cap;</td>
					<td>&amp;#8745;</td>
				</tr>
				<tr>

					<td>∪</td>
					<td>cup</td>
					<td>&amp;cup;</td>
					<td>&amp;#8746;</td>
				</tr>
				<tr>
					<td>∫</td>

					<td>integral</td>
					<td>&amp;int;</td>
					<td>&amp;#8747;</td>
				</tr>
				<tr>
					<td>∴</td>
					<td>therefore</td>

					<td>&amp;there4;</td>
					<td>&amp;#8756;</td>
				</tr>
				<tr>
					<td>∼</td>
					<td>simular to</td>
					<td>&amp;sim;</td>

					<td>&amp;#8764;</td>
				</tr>
				<tr>
					<td>≅</td>
					<td>approximately equal</td>
					<td>&amp;cong;</td>
					<td>&amp;#8773;</td>

				</tr>
				<tr>
					<td>≈</td>
					<td>almost equal</td>
					<td>&amp;asymp;</td>
					<td>&amp;#8776;</td>
				</tr>

				<tr>
					<td>≠</td>
					<td>not equal</td>
					<td>&amp;ne;</td>
					<td>&amp;#8800;</td>
				</tr>
				<tr>

					<td>≡</td>
					<td>equivalent</td>
					<td>&amp;equiv;</td>
					<td>&amp;#8801;</td>
				</tr>
				<tr>
					<td>≤</td>

					<td>less or equal</td>
					<td>&amp;le;</td>
					<td>&amp;#8804;</td>
				</tr>
				<tr>
					<td>≥</td>
					<td>greater or equal</td>

					<td>&amp;ge;</td>
					<td>&amp;#8805;</td>
				</tr>
				<tr>
					<td>⊂</td>
					<td>subset of</td>
					<td>&amp;sub;</td>

					<td>&amp;#8834;</td>
				</tr>
				<tr>
					<td>⊃</td>
					<td>superset of</td>
					<td>&amp;sup;</td>
					<td>&amp;#8835;</td>

				</tr>
				<tr>
					<td>⊄</td>
					<td>not subset of</td>
					<td>&amp;nsub;</td>
					<td>&amp;#8836;</td>
				</tr>

				<tr>
					<td>⊆</td>
					<td>subset or equal</td>
					<td>&amp;sube;</td>
					<td>&amp;#8838;</td>
				</tr>
				<tr>

					<td>⊇</td>
					<td>superset or equal</td>
					<td>&amp;supe;</td>
					<td>&amp;#8839;</td>
				</tr>
				<tr>
					<td>⊕</td>

					<td>circled plus</td>
					<td>&amp;oplus;</td>
					<td>&amp;#8853;</td>
				</tr>
				<tr>
					<td>⊗</td>
					<td>cirled times</td>

					<td>&amp;otimes;</td>
					<td>&amp;#8855;</td>
				</tr>
				<tr>
					<td>⊥</td>
					<td>perpendicular</td>
					<td>&amp;perp;</td>

					<td>&amp;#8869;</td>
				</tr>
				<tr>
					<td>⋅</td>
					<td>dot operator</td>
					<td>&amp;sdot;</td>
					<td>&amp;#8901;</td>

				</tr>
			</tbody>
		</table>
		<el-divider></el-divider>
		<h4>HTML 支持的希腊字母</h4>
		<table class="el-table">
			<tbody>
				<tr>
					<th style="width:10%;">结果</th>
					<th style="width:50%;">描述</th>
					<th style="width:20%;">实体名称</th>
					<th style="width:20%;">实体编号</th>
				</tr>
				<tr>
					<td>Α</td>
					<td>Alpha</td>
					<td>&amp;Alpha;</td>

					<td>&amp;#913;</td>
				</tr>
				<tr>
					<td>Β</td>
					<td>Beta</td>
					<td>&amp;Beta;</td>
					<td>&amp;#914;</td>

				</tr>
				<tr>
					<td>Γ</td>
					<td>Gamma</td>
					<td>&amp;Gamma;</td>
					<td>&amp;#915;</td>
				</tr>

				<tr>
					<td>Δ</td>
					<td>Delta</td>
					<td>&amp;Delta;</td>
					<td>&amp;#916;</td>
				</tr>
				<tr>

					<td>Ε</td>
					<td>Epsilon</td>
					<td>&amp;Epsilon;</td>
					<td>&amp;#917;</td>
				</tr>
				<tr>
					<td>Ζ</td>

					<td>Zeta</td>
					<td>&amp;Zeta;</td>
					<td>&amp;#918;</td>
				</tr>
				<tr>
					<td>Η</td>
					<td>Eta</td>

					<td>&amp;Eta;</td>
					<td>&amp;#919;</td>
				</tr>
				<tr>
					<td>Θ</td>
					<td>Theta</td>
					<td>&amp;Theta;</td>

					<td>&amp;#920;</td>
				</tr>
				<tr>
					<td>Ι</td>
					<td>Iota</td>
					<td>&amp;Iota;</td>
					<td>&amp;#921;</td>

				</tr>
				<tr>
					<td>Κ</td>
					<td>Kappa</td>
					<td>&amp;Kappa;</td>
					<td>&amp;#922;</td>
				</tr>

				<tr>
					<td>Λ</td>
					<td>Lambda</td>
					<td>&amp;Lambda;</td>
					<td>&amp;#923;</td>
				</tr>
				<tr>

					<td>Μ</td>
					<td>Mu</td>
					<td>&amp;Mu;</td>
					<td>&amp;#924;</td>
				</tr>
				<tr>
					<td>Ν</td>

					<td>Nu</td>
					<td>&amp;Nu;</td>
					<td>&amp;#925;</td>
				</tr>
				<tr>
					<td>Ξ</td>
					<td>Xi</td>

					<td>&amp;Xi;</td>
					<td>&amp;#926;</td>
				</tr>
				<tr>
					<td>Ο</td>
					<td>Omicron</td>
					<td>&amp;Omicron;</td>

					<td>&amp;#927;</td>
				</tr>
				<tr>
					<td>Π</td>
					<td>Pi</td>
					<td>&amp;Pi;</td>
					<td>&amp;#928;</td>

				</tr>
				<tr>
					<td>Ρ</td>
					<td>Rho</td>
					<td>&amp;Rho;</td>
					<td>&amp;#929;</td>
				</tr>

				<tr>
					<td>&nbsp;</td>
					<td>Sigmaf</td>
					<td>&nbsp;</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>Σ</td>

					<td>Sigma</td>
					<td>&amp;Sigma;</td>
					<td>&amp;#931;</td>
				</tr>
				<tr>
					<td>Τ</td>
					<td>Tau</td>

					<td>&amp;Tau;</td>
					<td>&amp;#932;</td>
				</tr>
				<tr>
					<td>Υ</td>
					<td>Upsilon</td>
					<td>&amp;Upsilon;</td>

					<td>&amp;#933;</td>
				</tr>
				<tr>
					<td>Φ</td>
					<td>Phi</td>
					<td>&amp;Phi;</td>
					<td>&amp;#934;</td>

				</tr>
				<tr>
					<td>Χ</td>
					<td>Chi</td>
					<td>&amp;Chi;</td>
					<td>&amp;#935;</td>
				</tr>


				<tr>
					<td>Ψ</td>
					<td>Psi</td>
					<td>&amp;Psi;</td>
					<td>&amp;#936;</td>
				</tr>
				<tr>

					<td>Ω</td>
					<td>Omega</td>
					<td>&amp;Omega;</td>
					<td>&amp;#937;</td>
				</tr>

				<tr>
					<td>&nbsp;</td>

					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
				</tr>

				<tr>
					<td>α</td>
					<td>alpha</td>
					<td>&amp;alpha;</td>

					<td>&amp;#945;</td>
				</tr>
				<tr>
					<td>β</td>
					<td>beta</td>
					<td>&amp;beta;</td>
					<td>&amp;#946;</td>

				</tr>
				<tr>
					<td>γ</td>
					<td>gamma</td>
					<td>&amp;gamma;</td>
					<td>&amp;#947;</td>
				</tr>

				<tr>
					<td>δ</td>
					<td>delta</td>
					<td>&amp;delta;</td>
					<td>&amp;#948;</td>
				</tr>
				<tr>

					<td>ε</td>
					<td>epsilon</td>
					<td>&amp;epsilon;</td>
					<td>&amp;#949;</td>
				</tr>
				<tr>
					<td>ζ</td>

					<td>zeta</td>
					<td>&amp;zeta;</td>
					<td>&amp;#950;</td>
				</tr>
				<tr>
					<td>η</td>
					<td>eta</td>

					<td>&amp;eta;</td>
					<td>&amp;#951;</td>
				</tr>
				<tr>
					<td>θ</td>
					<td>theta</td>
					<td>&amp;theta;</td>

					<td>&amp;#952;</td>
				</tr>
				<tr>
					<td>ι</td>
					<td>iota</td>
					<td>&amp;iota;</td>
					<td>&amp;#953;</td>

				</tr>
				<tr>
					<td>κ</td>
					<td>kappa</td>
					<td>&amp;kappa;</td>
					<td>&amp;#954;</td>
				</tr>

				<tr>
					<td>λ</td>
					<td>lambda</td>
					<td>&amp;lambda;</td>
					<td>&amp;#923;</td>
				</tr>
				<tr>

					<td>μ</td>
					<td>mu</td>
					<td>&amp;mu;</td>
					<td>&amp;#956;</td>
				</tr>
				<tr>
					<td>ν</td>

					<td>nu</td>
					<td>&amp;nu;</td>
					<td>&amp;#925;</td>
				</tr>
				<tr>
					<td>ξ</td>
					<td>xi</td>

					<td>&amp;xi;</td>
					<td>&amp;#958;</td>
				</tr>
				<tr>
					<td>ο</td>
					<td>omicron</td>
					<td>&amp;omicron;</td>

					<td>&amp;#959;</td>
				</tr>
				<tr>
					<td>π</td>
					<td>pi</td>
					<td>&amp;pi;</td>
					<td>&amp;#960;</td>

				</tr>
				<tr>
					<td>ρ</td>
					<td>rho</td>
					<td>&amp;rho;</td>
					<td>&amp;#961;</td>
				</tr>

				<tr>
					<td>ς</td>
					<td>sigmaf</td>
					<td>&amp;sigmaf;</td>
					<td>&amp;#962;</td>
				</tr>
				<tr>

					<td>σ</td>
					<td>sigma</td>
					<td>&amp;sigma;</td>
					<td>&amp;#963;</td>
				</tr>
				<tr>
					<td>τ</td>

					<td>tau</td>
					<td>&amp;tau;</td>
					<td>&amp;#964;</td>
				</tr>
				<tr>
					<td>υ</td>
					<td>upsilon</td>

					<td>&amp;upsilon;</td>
					<td>&amp;#965;</td>
				</tr>
				<tr>
					<td>φ</td>
					<td>phi</td>
					<td>&amp;phi;</td>

					<td>&amp;#966;</td>
				</tr>
				<tr>
					<td>χ</td>
					<td>chi</td>
					<td>&amp;chi;</td>
					<td>&amp;#967;</td>

				</tr>
				<tr>
					<td>ψ</td>
					<td>psi</td>
					<td>&amp;psi;</td>
					<td>&amp;#968;</td>
				</tr>

				<tr>
					<td>ω</td>
					<td>omega</td>
					<td>&amp;omega;</td>
					<td>&amp;#969;</td>
				</tr>
				<tr>

					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>ϑ</td>
					<td>theta symbol</td>

					<td>&amp;thetasym;</td>
					<td>&amp;#977;</td>
				</tr>
				<tr>
					<td>ϒ</td>
					<td>upsilon symbol</td>
					<td>&amp;upsih;</td>

					<td>&amp;#978;</td>
				</tr>
				<tr>
					<td>ϖ</td>
					<td>pi symbol</td>
					<td>&amp;piv;</td>
					<td>&amp;#982;</td>
				</tr>
			</tbody>
		</table>
		<el-divider></el-divider>
		<h4>HTML 支持的其他实体</h4>
		<table class="el-table">
			<tbody>
				<tr>
					<th style="width:10%;">结果</th>
					<th style="width:50%;">描述</th>
					<th style="width:20%;">实体名称</th>
					<th style="width:20%;">实体编号</th>
				</tr>
				<tr>
					<td>Œ</td>
					<td>capital ligature OE</td>
					<td>&amp;OElig;</td>

					<td>&amp;#338;</td>
				</tr>
				<tr>
					<td>œ</td>
					<td>small ligature oe</td>
					<td>&amp;oelig;</td>
					<td>&amp;#339;</td>

				</tr>
				<tr>
					<td>Š</td>
					<td>capital S with caron</td>
					<td>&amp;Scaron;</td>
					<td>&amp;#352;</td>
				</tr>

				<tr>
					<td>š</td>
					<td>small S with caron</td>
					<td>&amp;scaron;</td>
					<td>&amp;#353;</td>
				</tr>
				<tr>

					<td>Ÿ</td>
					<td>capital Y with diaeres</td>
					<td>&amp;Yuml;</td>
					<td>&amp;#376;</td>
				</tr>
				<tr>
					<td>ƒ</td>

					<td>f with hook</td>
					<td>&amp;fnof;</td>
					<td>&amp;#402;</td>
				</tr>
				<tr>
					<td>ˆ</td>
					<td>modifier letter circumflex accent</td>

					<td>&amp;circ;</td>
					<td>&amp;#710;</td>
				</tr>
				<tr>
					<td>˜</td>
					<td>small tilde</td>
					<td>&amp;tilde;</td>

					<td>&amp;#732;</td>
				</tr>
				<tr>
					<td> </td>
					<td>en space</td>
					<td>&amp;ensp;</td>
					<td>&amp;#8194;</td>

				</tr>
				<tr>
					<td> </td>
					<td>em space</td>
					<td>&amp;emsp;</td>
					<td>&amp;#8195;</td>
				</tr>

				<tr>
					<td> </td>
					<td>thin space</td>
					<td>&amp;thinsp;</td>
					<td>&amp;#8201;</td>
				</tr>
				<tr>

					<td>‌</td>
					<td>zero width non-joiner</td>
					<td>&amp;zwnj;</td>
					<td>&amp;#8204;</td>
				</tr>
				<tr>
					<td>‍</td>

					<td>zero width joiner</td>
					<td>&amp;zwj;</td>
					<td>&amp;#8205;</td>
				</tr>
				<tr>
					<td>‎</td>
					<td>left-to-right mark</td>

					<td>&amp;lrm;</td>
					<td>&amp;#8206;</td>
				</tr>
				<tr>
					<td>‏</td>
					<td>right-to-left mark</td>
					<td>&amp;rlm;</td>

					<td>&amp;#8207;</td>
				</tr>
				<tr>
					<td>–</td>
					<td>en dash</td>
					<td>&amp;ndash;</td>
					<td>&amp;#8211;</td>

				</tr>
				<tr>
					<td>—</td>
					<td>em dash</td>
					<td>&amp;mdash;</td>
					<td>&amp;#8212;</td>
				</tr>

				<tr>
					<td>‘</td>
					<td>left single quotation mark</td>
					<td>&amp;lsquo;</td>
					<td>&amp;#8216;</td>
				</tr>
				<tr>

					<td>’</td>
					<td>right single quotation mark</td>
					<td>&amp;rsquo;</td>
					<td>&amp;#8217;</td>
				</tr>
				<tr>
					<td>‚</td>

					<td>single low-9 quotation mark</td>
					<td>&amp;sbquo;</td>
					<td>&amp;#8218;</td>
				</tr>
				<tr>
					<td>“</td>
					<td>left double quotation mark</td>

					<td>&amp;ldquo;</td>
					<td>&amp;#8220;</td>
				</tr>
				<tr>
					<td>”</td>
					<td>right double quotation mark</td>
					<td>&amp;rdquo;</td>

					<td>&amp;#8221;</td>
				</tr>
				<tr>
					<td>„</td>
					<td>double low-9 quotation mark</td>
					<td>&amp;bdquo;</td>
					<td>&amp;#8222;</td>

				</tr>
				<tr>
					<td>†</td>
					<td>dagger</td>
					<td>&amp;dagger;</td>
					<td>&amp;#8224;</td>
				</tr>

				<tr>
					<td>‡</td>
					<td>double dagger</td>
					<td>&amp;Dagger;</td>
					<td>&amp;#8225;</td>
				</tr>
				<tr>

					<td>•</td>
					<td>bullet</td>
					<td>&amp;bull;</td>
					<td>&amp;#8226;</td>
				</tr>
				<tr>
					<td>…</td>

					<td>horizontal ellipsis</td>
					<td>&amp;hellip;</td>
					<td>&amp;#8230;</td>
				</tr>
				<tr>
					<td>‰</td>
					<td>per mille&nbsp;</td>

					<td>&amp;permil;</td>
					<td>&amp;#8240;</td>
				</tr>
				<tr>
					<td>′</td>
					<td>minutes</td>
					<td>&amp;prime;</td>

					<td>&amp;#8242;</td>
				</tr>
				<tr>
					<td>″</td>
					<td>seconds</td>
					<td>&amp;Prime;</td>
					<td>&amp;#8243;</td>

				</tr>
				<tr>
					<td>‹</td>
					<td>single left angle quotation</td>
					<td>&amp;lsaquo;</td>
					<td>&amp;#8249;</td>
				</tr>

				<tr>
					<td>›</td>
					<td>single right angle quotation</td>
					<td>&amp;rsaquo;</td>
					<td>&amp;#8250;</td>
				</tr>
				<tr>

					<td>‾</td>
					<td>overline</td>
					<td>&amp;oline;</td>
					<td>&amp;#8254;</td>
				</tr>
				<tr>
					<td>€</td>

					<td>euro</td>
					<td>&amp;euro;</td>
					<td>&amp;#8364;</td>
				</tr>
				<tr>
					<td>™</td>
					<td>trademark</td>

					<td>&amp;trade;</td>
					<td>&amp;#8482;</td>
				</tr>
				<tr>
					<td>←</td>
					<td>left arrow</td>
					<td>&amp;larr;</td>

					<td>&amp;#8592;</td>
				</tr>
				<tr>
					<td>↑</td>
					<td>up arrow</td>
					<td>&amp;uarr;</td>
					<td>&amp;#8593;</td>

				</tr>
				<tr>
					<td>→</td>
					<td>right arrow</td>
					<td>&amp;rarr;</td>
					<td>&amp;#8594;</td>
				</tr>

				<tr>
					<td>↓</td>
					<td>down arrow</td>
					<td>&amp;darr;</td>
					<td>&amp;#8595;</td>
				</tr>
				<tr>

					<td>↔</td>
					<td>left right arrow</td>
					<td>&amp;harr;</td>
					<td>&amp;#8596;</td>
				</tr>
				<tr>
					<td>↵</td>

					<td>carriage return arrow</td>
					<td>&amp;crarr;</td>
					<td>&amp;#8629;</td>
				</tr>
				<tr>
					<td>⌈</td>
					<td>left ceiling</td>

					<td>&amp;lceil;</td>
					<td>&amp;#8968;</td>
				</tr>
				<tr>
					<td>⌉</td>
					<td>right ceiling</td>
					<td>&amp;rceil;</td>

					<td>&amp;#8969;</td>
				</tr>
				<tr>
					<td>⌊</td>
					<td>left floor</td>
					<td>&amp;lfloor;</td>
					<td>&amp;#8970;</td>

				</tr>
				<tr>
					<td>⌋</td>
					<td>right floor</td>
					<td>&amp;rfloor;</td>
					<td>&amp;#8971;</td>
				</tr>

				<tr>
					<td>◊</td>
					<td>lozenge</td>
					<td>&amp;loz;</td>
					<td>&amp;#9674;</td>
				</tr>
				<tr>

					<td>♠</td>
					<td>spade</td>
					<td>&amp;spades;</td>
					<td>&amp;#9824;</td>
				</tr>
				<tr>
					<td>♣</td>

					<td>club</td>
					<td>&amp;clubs;</td>
					<td>&amp;#9827;</td>
				</tr>
				<tr>
					<td>♥</td>
					<td>heart</td>

					<td>&amp;hearts;</td>
					<td>&amp;#9829;</td>
				</tr>
				<tr>
					<td>♦</td>
					<td>diamond</td>
					<td>&amp;diams;</td>

					<td>&amp;#9830;</td>
				</tr>
			</tbody>
		</table>
	</el-card>
</template>

<script>
</script>

<style scoped="scoped">
	th {
		border-top: 1px #EBEEF5 solid;
		border-bottom: 1px #EBEEF5 solid;
	}
</style>
