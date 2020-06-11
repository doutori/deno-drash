.PHONY: help build run dev clean

#: Show this help
help:
	@cat $(MAKEFILE_LIST) | deno run -q https://deno.land/x/makehelp/help.ts

#: Build library into a bundle for distribution
build: bundle.ts

#: Run deno server
run:
	deno run -A  main.ts

#: Run deno server for development (watching files)
dev:
	denon run -A  main.ts

#: Clean up built resources
clean:
	rm -f bundle.ts

# this comment won't show in help
bundle.ts: main.ts
	deno bundle --unstable  main.ts > bundle.ts
