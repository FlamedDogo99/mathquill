/************************************
 * Symbols for Advanced Mathematics
 ***********************************/
//
// Relation symbols (Sec 3.8)
//
const BINARY_OPERATORS = [
  // Relation Symbols
  'equiv:2261',
  'prec:227a',
  'succ:227b',
  'sim:223c',
  'perp:22a5',
  'preceq:2aaf',
  'succeq:2ab0',
  'simeq:2243',
  'mid:2223',
  'll:226a',
  'gg:226b',
  'asymp:224d',
  'parallel:2225',
  'bowtie:22c8',
  'smile:2323',
  'sqsubseteq:2291',
  'sqsupseteq:2292',
  'doteq:2250',
  'frown:2322',
  'ni:220b',
  'propto:221d',
  'vdash:22a2',
  'dashv:22a3',
  'owns:220b',

  // Binary operators
  'mp:2213',
  'ominus:2296',
  'uplus:228e',
  'sqcap:2293',
  'ast:2217',
  'sqcup:2294',
  'bigcirc:25ef',
  'bullet:2219',
  'ddagger:2021',
  'wr:2240',
  'amalg:2a3f',

  'cdot:22c5',
  'circ:2218',
  'div:00f7',
  'pm:00b1',
  /* 'times:00d7', */ 'cap:2229',
  'cup:222a',
  'land/wedge:2227',
  'wedge:2227' /* NOTE: \land is a valid LaTex command, but we normalize it to \wedge */,
  'lor/vee:2228',
  'vee:2228' /* NOTE: \lor is a valid LaTex command, but we normalize it to \vee */,
  'surd:221a',
  'approx:2248',
  'cong:2245',
  'gets:2190',
  'in:2208',
  'notin:2209',
  'subset:2282',
  'supset:2283',
  'subseteq:2286',
  'supseteq:2287',
  'nsubseteq:2288',
  'nsupseteq:2289',
  'models:22a8',
  'leftarrow:2190',
  'ne:2260',
  'neq/ne:2260' /* NOTE: \neq is a vaid Tex command, but we normalize it to \ne */,
  'ngeq:2271',
  'nleq:2270',
  'rightarrow:2192',
  'to:2192',

  // AMS Binary Operators
  'dotplus:2214',
  'smallsetminus/setminus:2216',
  'Cap:22d2',
  'Cup:22d3',
  'doublebarwedge:2a5e',
  'boxminus:229f',
  'boxplus:229e',
  'divideontimes:22c7',
  'ltimes:22c9',
  'rtimes:22ca',
  'leftthreetimes:22cb',
  'rightthreetimes:22cc',
  'curlywedge:22cf',
  'curlyvee:22ce',
  'circleddash:229d',
  'circledast:229b',
  'centerdot:22c5',
  'intercal:22ba',
  'doublecap:22d2',
  'doublecup:22d3',
  'boxtimes:22a0',
  'barwedge:22bc',
  'veebar:22bb',
  'odot:2299',
  'oplus:2295',
  'otimes:2297',
  'partial:2202',
  'oslash:2298',
  'circledcirc:229a',
  'boxdot:22a1',
  'bigtriangleup:25b3',
  'bigtriangledown:25bd',
  'dagger:2020',
  'diamond:22c4',
  'star:22c6',
  'triangleleft:25c3',
  'triangleright:25b9',

  // AMS binary relations
  'leqq:2266',
  'leqslant:2a7d',
  'eqslantless:2a95',
  'lesssim:2272',
  'lessapprox:2a85',
  'approxeq:224a',
  'lessdot:22d6',
  'lll:22d8',
  'lessgtr:2276',
  'lesseqgtr:22da',
  'lesseqqgtr:2a8b',
  'doteqdot:2251',
  'risingdotseq:2253',
  'fallingdotseq:2252',
  'backsim:223d',
  'backsimeq:22cd',
  'subseteqq:2ac5',
  'Subset:22d0',
  'sqsubset:228f',
  'preccurlyeq:227c',
  'curlyeqprec:22de',
  'precsim:227e',
  'precapprox:2ab7',
  'vartriangleleft:22b2',
  'trianglelefteq:22b4',
  'vDash:22a8',
  'Vvdash:22aa',
  'smallsmile:2323',
  'smallfrown:2322',
  'bumpeq:224f',
  'Bumpeq:224e',
  'geqq:2267',
  'geqslant:2a7e',
  'eqslantgtr:2a96',
  'gtrsim:2273',
  'gtrapprox:2a86',
  'gtrdot:22d7',
  'ggg:22d9',
  'gtrless:2277',
  'gtreqless:22db',
  'gtreqqless:2a8c',
  'eqcirc:2256',
  'circeq:2257',
  'triangleq:225c',
  'thicksim:223c',
  'thickapprox:2248',
  'supseteqq:2ac6',
  'Supset:22d1',
  'sqsupset:2290',
  'succcurlyeq:227d',
  'curlyeqsucc:22df',
  'succsim:227f',
  'succapprox:2ab8',
  'vartriangleright:22b3',
  'trianglerighteq:22b5',
  'Vdash:22a9',
  'shortmid:2223',
  'shortparallel:2225',
  'between:226c',
  'pitchfork:22d4',
  'varpropto:221d',
  'blacktriangleleft:25c0',
  'therefore:2234',
  'backepsilon:220d',
  'blacktriangleright:25b6',
  'because:2235',
  'llless:22d8',
  'gggtr:22d9',
  'lhd:22b2',
  'rhd:22b3',
  'eqsim:2242',
  'Join:22c8',
  'Doteq:2251',

  // AMS Negated Binary Relations
  'nless:226e',
  'nleqslant:e010',
  'nleqq:e011',
  'lneq:2a87',
  'lneqq:2268',
  'lvertneqq:e00c',
  'lnsim:22e6',
  'lnapprox:2a89',
  'nprec:2280',
  'npreceq:22e0',
  'precnsim:22e8',
  'precnapprox:2ab9',
  'nsim:2241',
  'nshortmid:e006',
  'nmid:2224',
  'nvdash:22ac',
  'nvDash:22ad',
  'ntriangleleft:22ea',
  'ntrianglelefteq:22ec',
  'subsetneq:228a',
  'varsubsetneq:e01a',
  'subsetneqq:2acb',
  'varsubsetneqq:e017',
  'ngtr:226f',
  'ngeqslant:e00f',
  'ngeqq:e00e',
  'gneq:2a88',
  'gneqq:2269',
  'gvertneqq:e00d',
  'gnsim:22e7',
  'gnapprox:2a8a',
  'nsucc:2281',
  'nsucceq:22e1',
  'succnsim:22e9',
  'succnapprox:2aba',
  'ncong:2246',
  'nshortparallel:e007',
  'nparallel:2226',
  'nVDash:22af',
  'ntriangleright:22eb',
  'ntrianglerighteq:22ed',
  'nsupseteqq:e018',
  'supsetneq:228b',
  'varsupsetneq:e01b',
  'supsetneqq:2acc',
  'varsupsetneqq:e019',
  'nVdash:22ae',
  'precneqq:2ab5',
  'succneqq:2ab6',
  'nsubseteqq:e016',
  'unlhd:22b4',
  'unrhd:22b5',

  // Arrow symbols
  'longleftarrow:27f5',
  'Leftarrow:21d0',
  'Longleftarrow:27f8',
  'longrightarrow:27f6',
  'Rightarrow:21d2',
  'Longrightarrow:27f9',
  'leftrightarrow:2194',
  'longleftrightarrow:27f7',
  'Leftrightarrow:21d4',
  'Longleftrightarrow:27fa',
  'mapsto:21a6',
  'longmapsto:27fc',
  'nearrow:2197',
  'hookleftarrow:21a9',
  'hookrightarrow:21aa',
  'searrow:2198',
  'leftharpoonup:21bc',
  'rightharpoonup:21c0',
  'swarrow:2199',
  'leftharpoondown:21bd',
  'rightharpoondown:21c1',
  'nwarrow:2196',
  'rightleftharpoons:21cc',

  // AMS Negated arrow
  'nleftarrow:219a',
  'nrightarrow:219b',
  'nLeftarrow:21cd',
  'nRightarrow:21cf',
  'nleftrightarrow:21ae',
  'nLeftrightarrow:21ce',

  // AMS Arrows
  'dashrightarrow:21e2',
  'dashleftarrow:21e0',
  'leftleftarrows:21c7',
  'leftrightarrows:21c6',
  'Lleftarrow:21da',
  'twoheadleftarrow:219e',
  'leftarrowtail:21a2',
  'looparrowleft:21ab',
  'leftrightharpoons:21cb',
  'curvearrowleft:21b6',
  'circlearrowleft:21ba',
  'Lsh:21b0',
  'upuparrows:21c8',
  'upharpoonleft:21bf',
  'downharpoonleft:21c3',
  'multimap:22b8',
  'leftrightsquigarrow:21ad',
  'rightrightarrows:21c9',
  'rightleftarrows:21c4',
  'twoheadrightarrow:21a0',
  'rightarrowtail:21a3',
  'looparrowright:21ac',
  'curvearrowright:21b7',
  'circlearrowright:21bb',
  'Rsh:21b1',
  'downdownarrows:21ca',
  'upharpoonright:21be',
  'downharpoonright:21c2',
  'rightsquigarrow:21dd',
  'leadsto:21dd',
  'Rrightarrow:21db',
  'restriction:21be',

  // Other arrows
  'uparrow:2191',
  'Uparrow:21d1',
  'downarrow:2193',
  'Downarrow:21d3',
  'updownarrow:2195',
  'Updownarrow:21d5',
];

const VANILLA_SYMBOLS = [
  // Misc symbols
  'forall:2200',
  'exists:2203',
  'nabla:2207',
  'wp:2118',
  'flat:266d',
  'natural:266e',
  'sharp:266f',
  'clubsuit:2663',
  'diamondsuit:2662',
  'heartsuit:2661',
  'spadesuit:2660',
  'emptyset:2205',
  'varnothing:2205',
  'Re:211c',
  'Im:2111',

  // Math and text
  'dag:2020',
  'ddag:2021',
  'space:00a0',

  // AMS Misc
  'vartriangle:25b3',
  'hslash:210f',
  'triangledown:25bd',
  'lozenge:25ca',
  'circledS:24c8',
  'circledR:00ae',
  'measuredangle:2221',
  'nexists:2204',
  'mho:2127',
  'Finv:2132',
  'Game:2141',
  'Bbbk:006b',
  'backprime:2035',
  'blacktriangle:25b2',
  'blacktriangledown:25bc',
  'blacksquare:25a0',
  'blacklozenge:29eb',
  'bigstar:2605',
  'sphericalangle:2222',
  'complement:2201',
  'eth:00f0',
  'diagup:2571',
  'diagdown:2572',
  'square:25a1',
  'Box:25a1',
  'Diamond:25ca',
  'yen:00a5',
  'checkmark:2713',

  // Basic math symbols
  'angle:2220',
  'infty:221e',
  'prime:2032',
  'triangle:25b3',

  'smallint:222b',

  // Accents
  // TODO: properly display accents above their character. Will probably need a new class for this.
  // Note that \vec has its own custom handler (see var Vec = ...). That would be a
  // candidate to be generalized for all accents.
  // 'acute:00b4', 'grave:0060', 'ddot:00a8', 'tilde:007e',
  // 'bar:00af', 'breve:02d8', 'check:02c7', 'hat:005e',
  // 'vec:20d7', 'dot:02d9',
];

for (const symbol of BINARY_OPERATORS) {
  const match = symbol.match(/([a-zA-Z]+)\/?([a-zA-Z]*):(\w+)/);
  // @ts-ignore
  LatexCmds[match[1]] = bindBinaryOperator(
    // @ts-ignore
    '\\' + (match[2] && match[2].length > 0 ? match[2] : match[1]) + ' ', // @ts-ignore
    '&#x' + match[3] + ';'
  );
}

for (const symbol of VANILLA_SYMBOLS) {
  const match = symbol.match(/([a-zA-Z]+):(.+)/);
  // @ts-ignore
  LatexCmds[match[1]] = bindVanillaSymbol(
    // @ts-ignore
    '\\' + match[1] + ' ', // @ts-ignore
    '&#x' + match[2] + ';'
  );
}

LatexCmds.notin =
  LatexCmds.cong =
  LatexCmds.equiv =
  LatexCmds.oplus =
  LatexCmds.otimes =
    (latex: string) =>
      new BinaryOperator('\\' + latex + ' ', h.entityText('&' + latex + ';'));
LatexCmds['≢'] =
  LatexCmds.nequiv =
  LatexCmds.notequiv =
    bindBinaryOperator('\\nequiv ', '&#8802;', 'not equivalent to');
LatexCmds['∗'] =
  LatexCmds.ast =
  LatexCmds.star =
  LatexCmds.loast =
  LatexCmds.lowast =
    bindBinaryOperator('\\ast ', '&lowast;', 'low asterisk');
LatexCmds.therefor = LatexCmds.therefore = bindBinaryOperator(
  '\\therefore ',
  '&there4;',
  'therefore'
);

LatexCmds.cuz = LatexCmds.because = bindBinaryOperator(
  // l33t
  '\\because ',
  '&#8757;',
  'because'
);

LatexCmds.prop = LatexCmds.propto = bindBinaryOperator(
  '\\propto ',
  '&prop;',
  'proportional to'
);

LatexCmds['≈'] =
  LatexCmds.asymp =
  LatexCmds.approx =
    bindBinaryOperator('\\approx ', '&asymp;', 'approximately equal to');

LatexCmds.isin = LatexCmds['in'] = bindBinaryOperator(
  '\\in ',
  '&isin;',
  'is in'
);

LatexCmds.ni = LatexCmds.contains = bindBinaryOperator(
  '\\ni ',
  '&ni;',
  'is not in'
);

LatexCmds.notni =
  LatexCmds.niton =
  LatexCmds.notcontains =
  LatexCmds.doesnotcontain =
    bindBinaryOperator('\\not\\ni ', '&#8716;', 'does not contain');

LatexCmds.sub = LatexCmds.subset = bindBinaryOperator(
  '\\subset ',
  '&sub;',
  'subset'
);

LatexCmds.sup =
  LatexCmds.supset =
  LatexCmds.superset =
    bindBinaryOperator('\\supset ', '&sup;', 'superset');

LatexCmds.nsub =
  LatexCmds.notsub =
  LatexCmds.nsubset =
  LatexCmds.notsubset =
    bindBinaryOperator('\\not\\subset ', '&#8836;', 'not a subset');

LatexCmds.nsup =
  LatexCmds.notsup =
  LatexCmds.nsupset =
  LatexCmds.notsupset =
  LatexCmds.nsuperset =
  LatexCmds.notsuperset =
    bindBinaryOperator('\\not\\supset ', '&#8837;', 'not a superset');

LatexCmds.sube =
  LatexCmds.subeq =
  LatexCmds.subsete =
  LatexCmds.subseteq =
    bindBinaryOperator('\\subseteq ', '&sube;', 'subset or equal to');

LatexCmds.supe =
  LatexCmds.supeq =
  LatexCmds.supsete =
  LatexCmds.supseteq =
  LatexCmds.supersete =
  LatexCmds.superseteq =
    bindBinaryOperator('\\supseteq ', '&supe;', 'superset or equal to');

LatexCmds.nsube =
  LatexCmds.nsubeq =
  LatexCmds.notsube =
  LatexCmds.notsubeq =
  LatexCmds.nsubsete =
  LatexCmds.nsubseteq =
  LatexCmds.notsubsete =
  LatexCmds.notsubseteq =
    bindBinaryOperator('\\not\\subseteq ', '&#8840;', 'not subset or equal to');

LatexCmds.nsupe =
  LatexCmds.nsupeq =
  LatexCmds.notsupe =
  LatexCmds.notsupeq =
  LatexCmds.nsupsete =
  LatexCmds.nsupseteq =
  LatexCmds.notsupsete =
  LatexCmds.notsupseteq =
  LatexCmds.nsupersete =
  LatexCmds.nsuperseteq =
  LatexCmds.notsupersete =
  LatexCmds.notsuperseteq =
    bindBinaryOperator(
      '\\not\\supseteq ',
      '&#8841;',
      'not superset or equal to'
    );

//the canonical sets of numbers
LatexCmds.mathbb = class extends MathCommand {
  createLeftOf(_cursor: Cursor) {}
  numBlocks() {
    return 1 as const;
  }
  parser() {
    var string = Parser.string;
    var regex = Parser.regex;
    var optWhitespace = Parser.optWhitespace;
    return optWhitespace
      .then(string('{'))
      .then(optWhitespace)
      .then(regex(/^[NPZQRCH]/))
      .skip(optWhitespace)
      .skip(string('}'))
      .map(function (c) {
        // instantiate the class for the matching char
        var cmd = LatexCmds[c];
        if (isMQNodeClass(cmd)) {
          return new cmd();
        } else {
          return (cmd as MQNodeBuilderNoParam)();
        }
      });
  }
};

LatexCmds.N =
  LatexCmds.naturals =
  LatexCmds.Naturals =
    bindVanillaSymbol('\\mathbb{N}', '&#8469;', 'naturals');

LatexCmds.P =
  LatexCmds.primes =
  LatexCmds.Primes =
  LatexCmds.projective =
  LatexCmds.Projective =
  LatexCmds.probability =
  LatexCmds.Probability =
    bindVanillaSymbol('\\mathbb{P}', '&#8473;', 'P');

LatexCmds.Z =
  LatexCmds.integers =
  LatexCmds.Integers =
    bindVanillaSymbol('\\mathbb{Z}', '&#8484;', 'integers');

LatexCmds.Q =
  LatexCmds.rationals =
  LatexCmds.Rationals =
    bindVanillaSymbol('\\mathbb{Q}', '&#8474;', 'rationals');

LatexCmds.R =
  LatexCmds.reals =
  LatexCmds.Reals =
    bindVanillaSymbol('\\mathbb{R}', '&#8477;', 'reals');

LatexCmds.C =
  LatexCmds.complex =
  LatexCmds.Complex =
  LatexCmds.complexes =
  LatexCmds.Complexes =
  LatexCmds.complexplane =
  LatexCmds.Complexplane =
  LatexCmds.ComplexPlane =
    bindVanillaSymbol('\\mathbb{C}', '&#8450;', 'complexes');

LatexCmds.H =
  LatexCmds.Hamiltonian =
  LatexCmds.quaternions =
  LatexCmds.Quaternions =
    bindVanillaSymbol('\\mathbb{H}', '&#8461;', 'quaternions');

//spacing
LatexCmds.quad = LatexCmds.emsp = bindVanillaSymbol(
  '\\quad ',
  '    ',
  '4 spaces'
);
LatexCmds.qquad = bindVanillaSymbol('\\qquad ', '        ', '8 spaces');
/* spacing special characters, gonna have to implement this in LatexCommandInput::onText somehow
case ',':
  return VanillaSymbol('\\, ',' ', 'comma');
case ':':
  return VanillaSymbol('\\: ','  ', 'colon');
case ';':
  return VanillaSymbol('\\; ','   ', 'semicolon');
case '!':
  return MQSymbol('\\! ','<span style="margin-right:-.2em"></span>', 'exclamation point');
*/

//binary operators
LatexCmds.diamond = bindVanillaSymbol('\\diamond ', '&#9671;', 'diamond');
LatexCmds.bigtriangleup = bindVanillaSymbol(
  '\\bigtriangleup ',
  '&#9651;',
  'triangle up'
);
LatexCmds.ominus = bindVanillaSymbol('\\ominus ', '&#8854;', 'o minus');
LatexCmds.uplus = bindVanillaSymbol('\\uplus ', '&#8846;', 'disjoint union');
LatexCmds.bigtriangledown = bindVanillaSymbol(
  '\\bigtriangledown ',
  '&#9661;',
  'triangle down'
);
LatexCmds.sqcap = bindVanillaSymbol(
  '\\sqcap ',
  '&#8851;',
  'greatest lower bound'
);
LatexCmds.triangleleft = bindVanillaSymbol(
  '\\triangleleft ',
  '&#8882;',
  'triangle left'
);
LatexCmds.sqcup = bindVanillaSymbol('\\sqcup ', '&#8852;', 'least upper bound');
LatexCmds.triangleright = bindVanillaSymbol(
  '\\triangleright ',
  '&#8883;',
  'triangle right'
);
//circledot is not a not real LaTex command see https://github.com/mathquill/mathquill/pull/552 for more details
LatexCmds.odot = LatexCmds.circledot = bindVanillaSymbol(
  '\\odot ',
  '&#8857;',
  'circle dot'
);
LatexCmds.bigcirc = bindVanillaSymbol('\\bigcirc ', '&#9711;', 'circle');
LatexCmds.dagger = bindVanillaSymbol('\\dagger ', '&#0134;', 'dagger');
LatexCmds.ddagger = bindVanillaSymbol('\\ddagger ', '&#135;', 'big dagger');
LatexCmds.wr = bindVanillaSymbol('\\wr ', '&#8768;', 'wreath');
LatexCmds.amalg = bindVanillaSymbol('\\amalg ', '&#8720;', 'amalgam');

//relationship symbols
LatexCmds.models = bindVanillaSymbol('\\models ', '&#8872;', 'models');
LatexCmds.prec = bindVanillaSymbol('\\prec ', '&#8826;', 'precedes');
LatexCmds.succ = bindVanillaSymbol('\\succ ', '&#8827;', 'succeeds');
LatexCmds.preceq = bindVanillaSymbol(
  '\\preceq ',
  '&#8828;',
  'precedes or equals'
);
LatexCmds.succeq = bindVanillaSymbol(
  '\\succeq ',
  '&#8829;',
  'succeeds or equals'
);
LatexCmds.simeq = bindVanillaSymbol(
  '\\simeq ',
  '&#8771;',
  'similar or equal to'
);
LatexCmds.mid = bindVanillaSymbol('\\mid ', '&#8739;', 'divides');
LatexCmds.ll = bindVanillaSymbol('\\ll ', '&#8810;', 'll');
LatexCmds.gg = bindVanillaSymbol('\\gg ', '&#8811;', 'gg');
LatexCmds.parallel = bindVanillaSymbol(
  '\\parallel ',
  '&#8741;',
  'parallel with'
);
LatexCmds.nparallel = bindVanillaSymbol(
  '\\nparallel ',
  '&#8742;',
  'not parallel with'
);
LatexCmds.bowtie = bindVanillaSymbol('\\bowtie ', '&#8904;', 'bowtie');
LatexCmds.sqsubset = bindVanillaSymbol(
  '\\sqsubset ',
  '&#8847;',
  'square subset'
);
LatexCmds.sqsupset = bindVanillaSymbol(
  '\\sqsupset ',
  '&#8848;',
  'square superset'
);
LatexCmds.smile = bindVanillaSymbol('\\smile ', '&#8995;', 'smile');
LatexCmds.sqsubseteq = bindVanillaSymbol(
  '\\sqsubseteq ',
  '&#8849;',
  'square subset or equal to'
);
LatexCmds.sqsupseteq = bindVanillaSymbol(
  '\\sqsupseteq ',
  '&#8850;',
  'square superset or equal to'
);
LatexCmds.doteq = bindVanillaSymbol('\\doteq ', '&#8784;', 'dotted equals');
LatexCmds.frown = bindVanillaSymbol('\\frown ', '&#8994;', 'frown');
LatexCmds.vdash = bindVanillaSymbol('\\vdash ', '&#8870;', 'v dash');
LatexCmds.dashv = bindVanillaSymbol('\\dashv ', '&#8867;', 'dash v');
LatexCmds.nless = bindVanillaSymbol('\\nless ', '&#8814;', 'not less than');
LatexCmds.ngtr = bindVanillaSymbol('\\ngtr ', '&#8815;', 'not greater than');

//arrows
LatexCmds.longleftarrow = bindVanillaSymbol(
  '\\longleftarrow ',
  '&#8592;',
  'left arrow'
);
LatexCmds.longrightarrow = bindVanillaSymbol(
  '\\longrightarrow ',
  '&#8594;',
  'right arrow'
);
LatexCmds.Longleftarrow = bindVanillaSymbol(
  '\\Longleftarrow ',
  '&#8656;',
  'left arrow'
);
LatexCmds.Longrightarrow = bindVanillaSymbol(
  '\\Longrightarrow ',
  '&#8658;',
  'right arrow'
);
LatexCmds.longleftrightarrow = bindVanillaSymbol(
  '\\longleftrightarrow ',
  '&#8596;',
  'left and right arrow'
);
LatexCmds.updownarrow = bindVanillaSymbol(
  '\\updownarrow ',
  '&#8597;',
  'up and down arrow'
);
LatexCmds.Longleftrightarrow = bindVanillaSymbol(
  '\\Longleftrightarrow ',
  '&#8660;',
  'left and right arrow'
);
LatexCmds.Updownarrow = bindVanillaSymbol(
  '\\Updownarrow ',
  '&#8661;',
  'up and down arrow'
);
LatexCmds.mapsto = bindVanillaSymbol('\\mapsto ', '&#8614;', 'maps to');
LatexCmds.nearrow = bindVanillaSymbol(
  '\\nearrow ',
  '&#8599;',
  'northeast arrow'
);
LatexCmds.hookleftarrow = bindVanillaSymbol(
  '\\hookleftarrow ',
  '&#8617;',
  'hook left arrow'
);
LatexCmds.hookrightarrow = bindVanillaSymbol(
  '\\hookrightarrow ',
  '&#8618;',
  'hook right arrow'
);
LatexCmds.searrow = bindVanillaSymbol(
  '\\searrow ',
  '&#8600;',
  'southeast arrow'
);
LatexCmds.leftharpoonup = bindVanillaSymbol(
  '\\leftharpoonup ',
  '&#8636;',
  'left harpoon up'
);
LatexCmds.rightharpoonup = bindVanillaSymbol(
  '\\rightharpoonup ',
  '&#8640;',
  'right harpoon up'
);
LatexCmds.swarrow = bindVanillaSymbol(
  '\\swarrow ',
  '&#8601;',
  'southwest arrow'
);
LatexCmds.leftharpoondown = bindVanillaSymbol(
  '\\leftharpoondown ',
  '&#8637;',
  'left harpoon down'
);
LatexCmds.rightharpoondown = bindVanillaSymbol(
  '\\rightharpoondown ',
  '&#8641;',
  'right harpoon down'
);
LatexCmds.nwarrow = bindVanillaSymbol(
  '\\nwarrow ',
  '&#8598;',
  'northwest arrow'
);

//Misc
LatexCmds.ldots = bindVanillaSymbol('\\ldots ', '&#8230;', 'l dots');
LatexCmds.cdots = bindVanillaSymbol('\\cdots ', '&#8943;', 'c dots');
LatexCmds.vdots = bindVanillaSymbol('\\vdots ', '&#8942;', 'v dots');
LatexCmds.ddots = bindVanillaSymbol('\\ddots ', '&#8945;', 'd dots');
LatexCmds.surd = bindVanillaSymbol('\\surd ', '&#8730;', 'unresolved root');
LatexCmds.triangle = bindVanillaSymbol('\\triangle ', '&#9651;', 'triangle');
LatexCmds.ell = bindVanillaSymbol('\\ell ', '&#8467;', 'ell');
LatexCmds.top = bindVanillaSymbol('\\top ', '&#8868;', 'top');
LatexCmds.flat = bindVanillaSymbol('\\flat ', '&#9837;', 'flat');
LatexCmds.natural = bindVanillaSymbol('\\natural ', '&#9838;', 'natural');
LatexCmds.sharp = bindVanillaSymbol('\\sharp ', '&#9839;', 'sharp');
LatexCmds.wp = bindVanillaSymbol('\\wp ', '&#8472;', 'wp');
LatexCmds.bot = bindVanillaSymbol('\\bot ', '&#8869;', 'bot');
LatexCmds.clubsuit = bindVanillaSymbol('\\clubsuit ', '&#9827;', 'club suit');
LatexCmds.diamondsuit = bindVanillaSymbol(
  '\\diamondsuit ',
  '&#9826;',
  'diamond suit'
);
LatexCmds.heartsuit = bindVanillaSymbol(
  '\\heartsuit ',
  '&#9825;',
  'heart suit'
);
LatexCmds.spadesuit = bindVanillaSymbol(
  '\\spadesuit ',
  '&#9824;',
  'spade suit'
);
//not real LaTex command see https://github.com/mathquill/mathquill/pull/552 for more details
LatexCmds.parallelogram = bindVanillaSymbol(
  '\\parallelogram ',
  '&#9649;',
  'parallelogram'
);
LatexCmds.square = bindVanillaSymbol('\\square ', '&#11036;', 'square');

//variable-sized
LatexCmds.oint = bindVanillaSymbol('\\oint ', '&#8750;', 'o int');
LatexCmds.bigcap = bindVanillaSymbol('\\bigcap ', '&#8745;', 'big cap');
LatexCmds.bigcup = bindVanillaSymbol('\\bigcup ', '&#8746;', 'big cup');
LatexCmds.bigsqcup = bindVanillaSymbol(
  '\\bigsqcup ',
  '&#8852;',
  'big square cup'
);
LatexCmds.bigvee = bindVanillaSymbol('\\bigvee ', '&#8744;', 'big vee');
LatexCmds.bigwedge = bindVanillaSymbol('\\bigwedge ', '&#8743;', 'big wedge');
LatexCmds.bigodot = bindVanillaSymbol('\\bigodot ', '&#8857;', 'big o dot');
LatexCmds.bigotimes = bindVanillaSymbol(
  '\\bigotimes ',
  '&#8855;',
  'big o times'
);
LatexCmds.bigoplus = bindVanillaSymbol('\\bigoplus ', '&#8853;', 'big o plus');
LatexCmds.biguplus = bindVanillaSymbol('\\biguplus ', '&#8846;', 'big u plus');

//delimiters
LatexCmds.lfloor = bindVanillaSymbol('\\lfloor ', '&#8970;', 'left floor');
LatexCmds.rfloor = bindVanillaSymbol('\\rfloor ', '&#8971;', 'right floor');
LatexCmds.lceil = bindVanillaSymbol('\\lceil ', '&#8968;', 'left ceiling');
LatexCmds.rceil = bindVanillaSymbol('\\rceil ', '&#8969;', 'right ceiling');
LatexCmds.opencurlybrace = LatexCmds.lbrace = bindVanillaSymbol(
  '\\lbrace ',
  '{',
  'left brace'
);
LatexCmds.closecurlybrace = LatexCmds.rbrace = bindVanillaSymbol(
  '\\rbrace ',
  '}',
  'right brace'
);
LatexCmds.lbrack = bindVanillaSymbol('[', 'left bracket');
LatexCmds.rbrack = bindVanillaSymbol(']', 'right bracket');

//various symbols
LatexCmds.slash = bindVanillaSymbol('/', 'slash');
LatexCmds.vert = bindVanillaSymbol('|', 'vertical bar');
LatexCmds.perp = LatexCmds.perpendicular = bindVanillaSymbol(
  '\\perp ',
  '&perp;',
  'perpendicular'
);
LatexCmds.nabla = LatexCmds.del = bindVanillaSymbol('\\nabla ', '&nabla;');
LatexCmds.hbar = bindVanillaSymbol('\\hbar ', '&#8463;', 'horizontal bar');

LatexCmds.AA =
  LatexCmds.Angstrom =
  LatexCmds.angstrom =
    bindVanillaSymbol('\\text\\AA ', '&#8491;', 'AA');

LatexCmds.ring =
  LatexCmds.circ =
  LatexCmds.circle =
    bindVanillaSymbol('\\circ ', '&#8728;', 'circle');

LatexCmds.bull = LatexCmds.bullet = bindVanillaSymbol(
  '\\bullet ',
  '&bull;',
  'bullet'
);

LatexCmds.setminus = LatexCmds.smallsetminus = bindVanillaSymbol(
  '\\setminus ',
  '&#8726;',
  'set minus'
);

LatexCmds.not = //bind(MQSymbol,'\\not ','<span class="not">/</span>', 'not');
  LatexCmds['¬'] =
  LatexCmds.neg =
    bindVanillaSymbol('\\neg ', '&not;', 'not');

LatexCmds['…'] =
  LatexCmds.dots =
  LatexCmds.ellip =
  LatexCmds.hellip =
  LatexCmds.ellipsis =
  LatexCmds.hellipsis =
    bindVanillaSymbol('\\dots ', '&hellip;', 'ellipsis');

LatexCmds.converges =
  LatexCmds.darr =
  LatexCmds.dnarr =
  LatexCmds.dnarrow =
  LatexCmds.downarrow =
    bindVanillaSymbol('\\downarrow ', '&darr;', 'converges with');

LatexCmds.dArr =
  LatexCmds.dnArr =
  LatexCmds.dnArrow =
  LatexCmds.Downarrow =
    bindVanillaSymbol('\\Downarrow ', '&dArr;', 'down arrow');

LatexCmds.diverges =
  LatexCmds.uarr =
  LatexCmds.uparrow =
    bindVanillaSymbol('\\uparrow ', '&uarr;', 'diverges from');

LatexCmds.uArr = LatexCmds.Uparrow = bindVanillaSymbol(
  '\\Uparrow ',
  '&uArr;',
  'up arrow'
);

LatexCmds.rarr = LatexCmds.rightarrow = bindVanillaSymbol(
  '\\rightarrow ',
  '&rarr;',
  'right arrow'
);

LatexCmds.implies = bindBinaryOperator('\\Rightarrow ', '&rArr;', 'implies');

LatexCmds.rArr = LatexCmds.Rightarrow = bindVanillaSymbol(
  '\\Rightarrow ',
  '&rArr;',
  'right arrow'
);

LatexCmds.gets = bindBinaryOperator('\\gets ', '&larr;', 'gets');

LatexCmds.larr = LatexCmds.leftarrow = bindVanillaSymbol(
  '\\leftarrow ',
  '&larr;',
  'left arrow'
);

LatexCmds.impliedby = bindBinaryOperator(
  '\\Leftarrow ',
  '&lArr;',
  'implied by'
);

LatexCmds.lArr = LatexCmds.Leftarrow = bindVanillaSymbol(
  '\\Leftarrow ',
  '&lArr;',
  'left arrow'
);

LatexCmds.harr =
  LatexCmds.lrarr =
  LatexCmds.leftrightarrow =
    bindVanillaSymbol('\\leftrightarrow ', '&harr;', 'left and right arrow');

LatexCmds.iff = bindBinaryOperator(
  '\\Leftrightarrow ',
  '&hArr;',
  'if and only if'
);

LatexCmds.hArr =
  LatexCmds.lrArr =
  LatexCmds.Leftrightarrow =
    bindVanillaSymbol('\\Leftrightarrow ', '&hArr;', 'left and right arrow');

LatexCmds.Re =
  LatexCmds.Real =
  LatexCmds.real =
    bindVanillaSymbol('\\Re ', '&real;', 'real');

LatexCmds.Im =
  LatexCmds.imag =
  LatexCmds.image =
  LatexCmds.imagin =
  LatexCmds.imaginary =
  LatexCmds.Imaginary =
    bindVanillaSymbol('\\Im ', '&image;', 'imaginary');

LatexCmds['part'] = LatexCmds.partial = bindVanillaSymbol(
  '\\partial ',
  '&part;',
  'partial'
);

LatexCmds.pounds = bindVanillaSymbol('\\pounds ', '&pound;');

LatexCmds.alef =
  LatexCmds.alefsym =
  LatexCmds.aleph =
  LatexCmds.alephsym =
    bindVanillaSymbol('\\aleph ', '&alefsym;', 'alef sym');

LatexCmds.xist = //LOL
  LatexCmds.xists =
  LatexCmds.exist =
  LatexCmds.exists =
    bindVanillaSymbol('\\exists ', '&exist;', 'there exists at least 1');

LatexCmds.nexists = LatexCmds.nexist = bindVanillaSymbol(
  '\\nexists ',
  '&#8708;',
  'there is no'
);

LatexCmds.and =
  LatexCmds.land =
  LatexCmds.wedge =
    bindBinaryOperator('\\wedge ', '&and;', 'and');

LatexCmds.or =
  LatexCmds.lor =
  LatexCmds.vee =
    bindBinaryOperator('\\vee ', '&or;', 'or');

LatexCmds.o =
  LatexCmds.O =
  LatexCmds.empty =
  LatexCmds.emptyset =
  LatexCmds.oslash =
  LatexCmds.Oslash =
  LatexCmds.nothing =
  LatexCmds.varnothing =
    bindBinaryOperator('\\varnothing ', '&empty;', 'nothing');

LatexCmds.cup = LatexCmds.union = bindBinaryOperator(
  '\\cup ',
  '&cup;',
  'union'
);

LatexCmds.cap =
  LatexCmds.intersect =
  LatexCmds.intersection =
    bindBinaryOperator('\\cap ', '&cap;', 'intersection');

// FIXME: the correct LaTeX would be ^\circ but we can't parse that
LatexCmds.deg = LatexCmds.degree = bindVanillaSymbol(
  '\\degree ',
  '&deg;',
  'degrees'
);

LatexCmds.ang = LatexCmds.angle = bindVanillaSymbol(
  '\\angle ',
  '&ang;',
  'angle'
);
LatexCmds.measuredangle = bindVanillaSymbol(
  '\\measuredangle ',
  '&#8737;',
  'measured angle'
);
