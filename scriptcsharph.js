const textarea = document.getElementById('codeareacsharp');
textarea.addEventListener('paste', function(event) {
	event.preventDefault(); // Verhindert das Einfügen
	alert('Einfügen ist nicht erlaubt!');
});

document.addEventListener('DOMContentLoaded', function () {
      require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.41.0/min/vs' } });
      require(['vs/editor/editor.main'], function () {
        monaco.editor.create(document.getElementById('codeareacsharp'), {
          value: [
            'using System;',
            '',
            'class Program {',
            '  static void Main() {',
            '    Console.WriteLine("Hallo Welt!");',
            '  }',
            '}'
          ].join('\n'),
          language: 'csharp',
          theme: 'vs-light',
          automaticLayout: true,
        });
      });
    });