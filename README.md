<img src="brand/hosty-banner.svg" alt="Hosty - Local game servers, made simple." width="100%" />

# Hosty-Games

Signed game catalog for [Hosty](https://github.com/Morphy137/Hosty). The app reads `index.json` and
`index.json.sig` from this repository and installs the packs under `packs/`.

- `index.json`: every pack with its version, author and the SHA-256 and size of each file.
- `index.json.sig`: Ed25519 signature of `index.json`. Hosty rejects the catalog if it does not verify.
- `packs/<id>/`: the files of each game pack.

Do not edit these files by hand: they are generated and signed with `catalog/scripts/build-catalog.mjs` from the Hosty
repository (see [catalog/README.md](https://github.com/Morphy137/Hosty/blob/main/catalog/README.md)), and any
unsigned change makes the app ignore the catalog.

## License

The catalog tooling output and the game packs published by Hosty are under the
[PolyForm Noncommercial License 1.0.0](LICENSE): free for noncommercial use, with the copyright notice kept in any
copy or modified version. A pack by another author keeps the license that author states in its folder.
