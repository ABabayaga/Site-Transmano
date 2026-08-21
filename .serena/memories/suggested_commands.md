npm run dev      # Vite dev server + HMR
npm run build    # tsc -b (project-references typecheck) then vite build
npm run lint     # eslint .
npm run preview  # preview production build

No test command exists — do not invent one.

Darwin (macOS) shell notes: default BSD `sed`/`grep` differ from GNU (e.g. `sed -i` needs `-i ''`); prefer Serena's editing tools instead of raw `sed`. Standard `git`, `ls`, `find` behave as usual.