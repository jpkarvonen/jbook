(self.webpackChunkjbook=self.webpackChunkjbook||[]).push([[35601],{35601:function(){!function(e){var n={pattern:/[\s\S]+/,inside:null};e.languages.v=e.languages.extend("clike",{string:[{pattern:/`(?:\\`|\\?[^`]{1,2})`/,alias:"rune"},{pattern:/r?(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,alias:"quoted-string",greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:\{[^{}]*\}|\w+(?:\.\w+(?:\([^\(\)]*\))?|\[[^\[\]]+\])*)/,lookbehind:!0,inside:{"interpolation-variable":{pattern:/^\$\w[\s\S]*$/,alias:"variable"},"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},"interpolation-expression":n}}}}],"class-name":{pattern:/(\b(?:enum|interface|struct|type)\s+)(?:C\.)?\w+/,lookbehind:!0},keyword:/(?:\b(?:as|asm|assert|atomic|break|chan|const|continue|defer|else|embed|enum|fn|for|__global|go(?:to)?|if|import|in|interface|is|lock|match|module|mut|none|or|pub|return|rlock|select|shared|sizeof|static|struct|type(?:of)?|union|unsafe)|\$(?:if|else|for)|#(?:include|flag))\b/,number:/\b(?:0x[a-f\d]+(?:_[a-f\d]+)*|0b[01]+(?:_[01]+)*|0o[0-7]+(?:_[0-7]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?)\b/i,operator:/~|\?|[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\.?/,builtin:/\b(?:any(?:_int|_float)?|bool|byte(?:ptr)?|charptr|f(?:32|64)|i(?:8|16|nt|64|128)|rune|size_t|string|u(?:16|32|64|128)|voidptr)\b/}),n.inside=e.languages.v,e.languages.insertBefore("v","operator",{attribute:{pattern:/(^[\t ]*)\[(?:deprecated|unsafe_fn|typedef|live|inline|flag|ref_only|windows_stdcall|direct_array_access)\]/m,lookbehind:!0,alias:"annotation",inside:{punctuation:/[\[\]]/,keyword:/\w+/}},generic:{pattern:/<\w+>(?=\s*[\)\{])/,inside:{punctuation:/[<>]/,"class-name":/\w+/}}}),e.languages.insertBefore("v","function",{"generic-function":{pattern:/\b\w+\s*<\w+>(?=\()/,inside:{function:/^\w+/,generic:{pattern:/<\w+>/,inside:e.languages.v.generic.inside}}}})}(Prism)}}]);
//# sourceMappingURL=35601.3d387a6e.chunk.js.map