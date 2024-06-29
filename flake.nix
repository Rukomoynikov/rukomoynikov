{
    inputs = {
        nixpkgs = { url = "github:NixOS/nixpkgs"; };
        flake-utils = { url = "github:numtide/flake-utils"; };
    };
    outputs = { self, nixpkgs, flake-utils }:
        flake-utils.lib.eachDefaultSystem (system:
            let
                inherit (pkgs.lib) optional optionals;
                pkgs = import nixpkgs { inherit system; };
            in
            with pkgs;
            {
                devShell = mkShell {
                    buildInputs = [
                    nodejs
                    ]
                    ++ optional stdenv.isDarwin terminal-notifier
                    ++ optionals stdenv.isDarwin (with darwin.apple_sdk.frameworks; [
                               CoreFoundation
                               CoreServices
                             ]);
                };
            }
        );
}
