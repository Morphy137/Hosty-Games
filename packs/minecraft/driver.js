"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/adm-zip/util/constants.js
var require_constants = __commonJS({
  "node_modules/adm-zip/util/constants.js"(exports2, module2) {
    module2.exports = {
      /* The local file header */
      LOCHDR: 30,
      // LOC header size
      LOCSIG: 67324752,
      // "PK\003\004"
      LOCVER: 4,
      // version needed to extract
      LOCFLG: 6,
      // general purpose bit flag
      LOCHOW: 8,
      // compression method
      LOCTIM: 10,
      // modification time (2 bytes time, 2 bytes date)
      LOCCRC: 14,
      // uncompressed file crc-32 value
      LOCSIZ: 18,
      // compressed size
      LOCLEN: 22,
      // uncompressed size
      LOCNAM: 26,
      // filename length
      LOCEXT: 28,
      // extra field length
      /* The Data descriptor */
      EXTSIG: 134695760,
      // "PK\007\008"
      EXTHDR: 16,
      // EXT header size
      EXTCRC: 4,
      // uncompressed file crc-32 value
      EXTSIZ: 8,
      // compressed size
      EXTLEN: 12,
      // uncompressed size
      /* The central directory file header */
      CENHDR: 46,
      // CEN header size
      CENSIG: 33639248,
      // "PK\001\002"
      CENVEM: 4,
      // version made by
      CENVER: 6,
      // version needed to extract
      CENFLG: 8,
      // encrypt, decrypt flags
      CENHOW: 10,
      // compression method
      CENTIM: 12,
      // modification time (2 bytes time, 2 bytes date)
      CENCRC: 16,
      // uncompressed file crc-32 value
      CENSIZ: 20,
      // compressed size
      CENLEN: 24,
      // uncompressed size
      CENNAM: 28,
      // filename length
      CENEXT: 30,
      // extra field length
      CENCOM: 32,
      // file comment length
      CENDSK: 34,
      // volume number start
      CENATT: 36,
      // internal file attributes
      CENATX: 38,
      // external file attributes (host system dependent)
      CENOFF: 42,
      // LOC header offset
      /* The entries in the end of central directory */
      ENDHDR: 22,
      // END header size
      ENDSIG: 101010256,
      // "PK\005\006"
      ENDSUB: 8,
      // number of entries on this disk
      ENDTOT: 10,
      // total number of entries
      ENDSIZ: 12,
      // central directory size in bytes
      ENDOFF: 16,
      // offset of first CEN header
      ENDCOM: 20,
      // zip file comment length
      END64HDR: 20,
      // zip64 END header size
      END64SIG: 117853008,
      // zip64 Locator signature, "PK\006\007"
      END64START: 4,
      // number of the disk with the start of the zip64
      END64OFF: 8,
      // relative offset of the zip64 end of central directory
      END64NUMDISKS: 16,
      // total number of disks
      ZIP64SIG: 101075792,
      // zip64 signature, "PK\006\006"
      ZIP64HDR: 56,
      // zip64 record minimum size
      ZIP64LEAD: 12,
      // leading bytes at the start of the record, not counted by the value stored in ZIP64SIZE
      ZIP64SIZE: 4,
      // zip64 size of the central directory record
      ZIP64VEM: 12,
      // zip64 version made by
      ZIP64VER: 14,
      // zip64 version needed to extract
      ZIP64DSK: 16,
      // zip64 number of this disk
      ZIP64DSKDIR: 20,
      // number of the disk with the start of the record directory
      ZIP64SUB: 24,
      // number of entries on this disk
      ZIP64TOT: 32,
      // total number of entries
      ZIP64SIZB: 40,
      // zip64 central directory size in bytes
      ZIP64OFF: 48,
      // offset of start of central directory with respect to the starting disk number
      ZIP64EXTRA: 56,
      // extensible data sector
      /* Compression methods */
      STORED: 0,
      // no compression
      SHRUNK: 1,
      // shrunk
      REDUCED1: 2,
      // reduced with compression factor 1
      REDUCED2: 3,
      // reduced with compression factor 2
      REDUCED3: 4,
      // reduced with compression factor 3
      REDUCED4: 5,
      // reduced with compression factor 4
      IMPLODED: 6,
      // imploded
      // 7 reserved for Tokenizing compression algorithm
      DEFLATED: 8,
      // deflated
      ENHANCED_DEFLATED: 9,
      // enhanced deflated
      PKWARE: 10,
      // PKWare DCL imploded
      // 11 reserved by PKWARE
      BZIP2: 12,
      //  compressed using BZIP2
      // 13 reserved by PKWARE
      LZMA: 14,
      // LZMA
      // 15-17 reserved by PKWARE
      IBM_TERSE: 18,
      // compressed using IBM TERSE
      IBM_LZ77: 19,
      // IBM LZ77 z
      AES_ENCRYPT: 99,
      // WinZIP AES encryption method
      /* General purpose bit flag */
      // values can obtained with expression 2**bitnr
      FLG_ENC: 1,
      // Bit 0: encrypted file
      FLG_COMP1: 2,
      // Bit 1, compression option
      FLG_COMP2: 4,
      // Bit 2, compression option
      FLG_DESC: 8,
      // Bit 3, data descriptor
      FLG_ENH: 16,
      // Bit 4, enhanced deflating
      FLG_PATCH: 32,
      // Bit 5, indicates that the file is compressed patched data.
      FLG_STR: 64,
      // Bit 6, strong encryption (patented)
      // Bits 7-10: Currently unused.
      FLG_EFS: 2048,
      // Bit 11: Language encoding flag (EFS)
      // Bit 12: Reserved by PKWARE for enhanced compression.
      // Bit 13: encrypted the Central Directory (patented).
      // Bits 14-15: Reserved by PKWARE.
      FLG_MSK: 4096,
      // mask header values
      /* Load type */
      FILE: 2,
      BUFFER: 1,
      NONE: 0,
      /* 4.5 Extensible data fields */
      EF_ID: 0,
      EF_SIZE: 2,
      /* Header IDs */
      ID_ZIP64: 1,
      ID_AVINFO: 7,
      ID_PFS: 8,
      ID_OS2: 9,
      ID_NTFS: 10,
      ID_OPENVMS: 12,
      ID_UNIX: 13,
      ID_FORK: 14,
      ID_PATCH: 15,
      ID_X509_PKCS7: 20,
      ID_X509_CERTID_F: 21,
      ID_X509_CERTID_C: 22,
      ID_STRONGENC: 23,
      ID_RECORD_MGT: 24,
      ID_X509_PKCS7_RL: 25,
      ID_IBM1: 101,
      ID_IBM2: 102,
      ID_POSZIP: 18064,
      EF_ZIP64_OR_32: 4294967295,
      EF_ZIP64_OR_16: 65535,
      EF_ZIP64_SUNCOMP: 0,
      EF_ZIP64_SCOMP: 8,
      EF_ZIP64_RHO: 16,
      EF_ZIP64_DSN: 24
    };
  }
});

// node_modules/adm-zip/util/errors.js
var require_errors = __commonJS({
  "node_modules/adm-zip/util/errors.js"(exports2) {
    var errors = {
      /* Header error messages */
      INVALID_LOC: "Invalid LOC header (bad signature)",
      INVALID_CEN: "Invalid CEN header (bad signature)",
      INVALID_END: "Invalid END header (bad signature)",
      /* Descriptor */
      DESCRIPTOR_NOT_EXIST: "No descriptor present",
      DESCRIPTOR_UNKNOWN: "Unknown descriptor format",
      DESCRIPTOR_FAULTY: "Descriptor data is malformed",
      /* ZipEntry error messages*/
      NO_DATA: "Nothing to decompress",
      BAD_CRC: "CRC32 checksum failed {0}",
      MAX_OUTPUT_EXCEEDED: "Decompressed data exceeds the declared uncompressed size",
      FILE_IN_THE_WAY: "There is a file in the way: {0}",
      UNKNOWN_METHOD: "Invalid/unsupported compression method",
      /* Inflater error messages */
      AVAIL_DATA: "inflate::Available inflate data did not terminate",
      INVALID_DISTANCE: "inflate::Invalid literal/length or distance code in fixed or dynamic block",
      TO_MANY_CODES: "inflate::Dynamic block code description: too many length or distance codes",
      INVALID_REPEAT_LEN: "inflate::Dynamic block code description: repeat more than specified lengths",
      INVALID_REPEAT_FIRST: "inflate::Dynamic block code description: repeat lengths with no first length",
      INCOMPLETE_CODES: "inflate::Dynamic block code description: code lengths codes incomplete",
      INVALID_DYN_DISTANCE: "inflate::Dynamic block code description: invalid distance code lengths",
      INVALID_CODES_LEN: "inflate::Dynamic block code description: invalid literal/length code lengths",
      INVALID_STORE_BLOCK: "inflate::Stored block length did not match one's complement",
      INVALID_BLOCK_TYPE: "inflate::Invalid block type (type == 3)",
      /* ADM-ZIP error messages */
      CANT_EXTRACT_FILE: "Could not extract the file",
      CANT_OVERRIDE: "Target file already exists",
      DISK_ENTRY_TOO_LARGE: "Number of disk entries is too large",
      NO_ZIP: "No zip file was loaded",
      NO_ENTRY: "Entry doesn't exist",
      DUPLICATE_ENTRY: "Duplicate entry name {0}",
      DIRECTORY_CONTENT_ERROR: "A directory cannot have content",
      FILE_NOT_FOUND: 'File not found: "{0}"',
      NOT_IMPLEMENTED: "Not implemented",
      INVALID_FILENAME: "Invalid filename",
      INVALID_FORMAT: "Invalid or unsupported zip format. No END header found",
      ZIP64_VALUE_TOO_LARGE: "Zip64 value exceeds the maximum safe integer",
      INVALID_PASS_PARAM: "Incompatible password parameter",
      WRONG_PASSWORD: "Wrong Password",
      /* ADM-ZIP */
      COMMENT_TOO_LONG: "Comment is too long",
      // Comment can be max 65535 bytes long (NOTE: some non-US characters may take more space)
      EXTRA_FIELD_PARSE_ERROR: "Extra field parsing error"
    };
    function E(message) {
      return function(...args) {
        if (args.length) {
          message = message.replace(/\{(\d)\}/g, (_, n) => args[n] || "");
        }
        return new Error("ADM-ZIP: " + message);
      };
    }
    for (const msg of Object.keys(errors)) {
      exports2[msg] = E(errors[msg]);
    }
  }
});

// node_modules/adm-zip/util/utils.js
var require_utils = __commonJS({
  "node_modules/adm-zip/util/utils.js"(exports2, module2) {
    var fsystem = require("fs");
    var pth = require("path");
    var Constants = require_constants();
    var Errors = require_errors();
    var isWin = typeof process === "object" && "win32" === process.platform;
    var is_Obj = (obj) => typeof obj === "object" && obj !== null;
    var crcTable = new Uint32Array(256).map((t, c) => {
      for (let k = 0; k < 8; k++) {
        if ((c & 1) !== 0) {
          c = 3988292384 ^ c >>> 1;
        } else {
          c >>>= 1;
        }
      }
      return c >>> 0;
    });
    function Utils(opts) {
      this.sep = pth.sep;
      this.fs = fsystem;
      if (is_Obj(opts)) {
        if (is_Obj(opts.fs) && typeof opts.fs.statSync === "function") {
          this.fs = opts.fs;
        }
      }
    }
    module2.exports = Utils;
    Utils.prototype.makeDir = function(folder) {
      const self = this;
      function mkdirSync(fpath) {
        let resolvedPath = fpath.split(self.sep)[0];
        fpath.split(self.sep).forEach(function(name) {
          if (!name || name.substr(-1, 1) === ":") return;
          resolvedPath += self.sep + name;
          var stat;
          try {
            stat = self.fs.statSync(resolvedPath);
          } catch (e) {
            if (e.message && e.message.startsWith("ENOENT")) {
              self.fs.mkdirSync(resolvedPath);
            } else {
              throw e;
            }
          }
          if (stat && stat.isFile()) throw Errors.FILE_IN_THE_WAY(`"${resolvedPath}"`);
        });
      }
      mkdirSync(folder);
    };
    Utils.prototype.writeFileTo = function(path5, content, overwrite, attr) {
      const self = this;
      if (self.fs.existsSync(path5)) {
        if (!overwrite) return false;
        var stat = self.fs.statSync(path5);
        if (stat.isDirectory()) {
          return false;
        }
      }
      var folder = pth.dirname(path5);
      if (!self.fs.existsSync(folder)) {
        self.makeDir(folder);
      }
      var fd;
      try {
        fd = self.fs.openSync(path5, "w", 438);
      } catch (e) {
        self.fs.chmodSync(path5, 438);
        fd = self.fs.openSync(path5, "w", 438);
      }
      if (fd) {
        try {
          self.fs.writeSync(fd, content, 0, content.length, 0);
        } finally {
          self.fs.closeSync(fd);
        }
      }
      self.fs.chmodSync(path5, attr || 438);
      return true;
    };
    Utils.prototype.writeFileToAsync = function(path5, content, overwrite, attr, callback) {
      if (typeof attr === "function") {
        callback = attr;
        attr = void 0;
      }
      const self = this;
      self.fs.exists(path5, function(exist) {
        if (exist && !overwrite) return callback(false);
        self.fs.stat(path5, function(err, stat) {
          if (exist && stat && stat.isDirectory()) {
            return callback(false);
          }
          var folder = pth.dirname(path5);
          self.fs.exists(folder, function(exists) {
            if (!exists) {
              try {
                self.makeDir(folder);
              } catch (e) {
                return callback(false);
              }
            }
            const writeToFd = function(fd) {
              self.fs.write(fd, content, 0, content.length, 0, function(writeErr) {
                self.fs.close(fd, function() {
                  if (writeErr) return callback(false);
                  self.fs.chmod(path5, attr || 438, function() {
                    callback(true);
                  });
                });
              });
            };
            self.fs.open(path5, "w", 438, function(err2, fd) {
              if (err2) {
                self.fs.chmod(path5, 438, function() {
                  self.fs.open(path5, "w", 438, function(retryErr, fd2) {
                    if (retryErr || !fd2) return callback(false);
                    writeToFd(fd2);
                  });
                });
              } else if (fd) {
                writeToFd(fd);
              } else {
                callback(false);
              }
            });
          });
        });
      });
    };
    Utils.prototype.assertPathSafe = function(root, target) {
      const self = this;
      if (typeof self.fs.lstatSync !== "function") return;
      const resolvedRoot = pth.resolve(root);
      const resolvedTarget = pth.resolve(target);
      if (resolvedTarget === resolvedRoot) return;
      const rel = pth.relative(resolvedRoot, resolvedTarget);
      if (!rel || rel === ".." || rel.startsWith(".." + pth.sep) || pth.isAbsolute(rel)) return;
      let cur = resolvedRoot;
      for (const part of rel.split(pth.sep)) {
        if (!part || part === ".") continue;
        cur = pth.join(cur, part);
        let stat;
        try {
          stat = self.fs.lstatSync(cur);
        } catch (e) {
          break;
        }
        if (stat.isSymbolicLink()) throw Errors.FILE_IN_THE_WAY(`"${cur}"`);
      }
    };
    Utils.prototype.findFiles = function(path5) {
      const self = this;
      const canLstat = typeof self.fs.lstatSync === "function";
      const rootReal = self.fs.realpathSync(path5);
      function escapesRoot(p) {
        if (!canLstat) return false;
        if (!self.fs.lstatSync(p).isSymbolicLink()) return false;
        let real;
        try {
          real = self.fs.realpathSync(p);
        } catch (e) {
          return true;
        }
        return !(real === rootReal || real.startsWith(rootReal + pth.sep));
      }
      function findSync(dir, pattern, recursive, visited) {
        if (typeof pattern === "boolean") {
          recursive = pattern;
          pattern = void 0;
        }
        let files = [];
        self.fs.readdirSync(dir).forEach(function(file) {
          const path6 = pth.join(dir, file);
          if (escapesRoot(path6)) return;
          const stat = self.fs.statSync(path6);
          if (!pattern || pattern.test(path6)) {
            files.push(pth.normalize(path6) + (stat.isDirectory() ? self.sep : ""));
          }
          if (stat.isDirectory() && recursive) {
            const realDir = self.fs.realpathSync(path6);
            if (!visited.has(realDir)) {
              visited.add(realDir);
              files = files.concat(findSync(path6, pattern, recursive, visited));
            }
          }
        });
        return files;
      }
      return findSync(path5, void 0, true, /* @__PURE__ */ new Set([rootReal]));
    };
    Utils.prototype.findFilesAsync = function(dir, cb) {
      const self = this;
      const results = [];
      let finished = false;
      const finish = function(err) {
        if (finished) return;
        finished = true;
        cb(err, err ? void 0 : results);
      };
      const canLstat = typeof self.fs.lstat === "function";
      let rootReal = null;
      const escapesRoot = function(file, cb2) {
        if (!canLstat) return cb2(null, false);
        self.fs.lstat(file, function(err, lst) {
          if (err) return cb2(err);
          if (!lst || !lst.isSymbolicLink()) return cb2(null, false);
          self.fs.realpath(file, function(err2, real) {
            if (err2) return cb2(null, true);
            cb2(null, !(real === rootReal || real.startsWith(rootReal + pth.sep)));
          });
        });
      };
      const walk = function(dir2, visited, done) {
        self.fs.readdir(dir2, function(err, list) {
          if (err) return done(err);
          let pending = list.length;
          if (!pending) return done();
          list.forEach(function(name) {
            const file = pth.join(dir2, name);
            escapesRoot(file, function(err2, escapes) {
              if (err2) return done(err2);
              if (escapes) {
                if (!--pending) done();
                return;
              }
              self.fs.stat(file, function(err3, stat) {
                if (err3) return done(err3);
                if (!stat) {
                  if (!--pending) done();
                  return;
                }
                results.push(pth.normalize(file) + (stat.isDirectory() ? self.sep : ""));
                if (!stat.isDirectory()) {
                  if (!--pending) done();
                  return;
                }
                self.fs.realpath(file, function(err4, realDir) {
                  if (err4) return done(err4);
                  if (visited.has(realDir)) {
                    if (!--pending) done();
                    return;
                  }
                  visited.add(realDir);
                  walk(file, visited, function(err5) {
                    if (err5) return done(err5);
                    if (!--pending) done();
                  });
                });
              });
            });
          });
        });
      };
      self.fs.realpath(dir, function(err, realDir) {
        if (err) return finish(err);
        rootReal = realDir;
        walk(dir, /* @__PURE__ */ new Set([realDir]), finish);
      });
    };
    Utils.prototype.getAttributes = function() {
    };
    Utils.prototype.setAttributes = function() {
    };
    Utils.crc32update = function(crc, byte) {
      return crcTable[(crc ^ byte) & 255] ^ crc >>> 8;
    };
    Utils.crc32 = function(buf) {
      if (typeof buf === "string") {
        buf = Buffer.from(buf, "utf8");
      }
      let len = buf.length;
      let crc = ~0;
      for (let off = 0; off < len; ) crc = Utils.crc32update(crc, buf[off++]);
      return ~crc >>> 0;
    };
    Utils.methodToString = function(method) {
      switch (method) {
        case Constants.STORED:
          return "STORED (" + method + ")";
        case Constants.DEFLATED:
          return "DEFLATED (" + method + ")";
        default:
          return "UNSUPPORTED (" + method + ")";
      }
    };
    Utils.canonical = function(path5) {
      if (!path5) return "";
      const safeSuffix = pth.posix.normalize("/" + path5.split("\\").join("/"));
      return pth.join(".", safeSuffix);
    };
    Utils.zipnamefix = function(path5) {
      if (!path5) return "";
      const safeSuffix = pth.posix.normalize("/" + path5.split("\\").join("/"));
      return pth.posix.join(".", safeSuffix);
    };
    Utils.findLast = function(arr, callback) {
      if (!Array.isArray(arr)) throw new TypeError("arr is not array");
      const len = arr.length >>> 0;
      for (let i = len - 1; i >= 0; i--) {
        if (callback(arr[i], i, arr)) {
          return arr[i];
        }
      }
      return void 0;
    };
    Utils.sanitize = function(prefix, name) {
      prefix = pth.resolve(pth.normalize(prefix));
      var parts = name.split("/");
      for (var i = 0, l = parts.length; i < l; i++) {
        var path5 = pth.normalize(pth.join(prefix, parts.slice(i, l).join(pth.sep)));
        if (path5 === prefix || path5.startsWith(prefix + pth.sep)) {
          return path5;
        }
      }
      return pth.normalize(pth.join(prefix, pth.basename(name)));
    };
    Utils.toBuffer = function toBuffer(input, encoder) {
      if (Buffer.isBuffer(input)) {
        return input;
      } else if (input instanceof Uint8Array) {
        return Buffer.from(input);
      } else {
        return typeof input === "string" ? encoder(input) : Buffer.alloc(0);
      }
    };
    Utils.readBigUInt64LE = function(buffer, index) {
      const lo = buffer.readUInt32LE(index);
      const hi = buffer.readUInt32LE(index + 4);
      const value = hi * 4294967296 + lo;
      if (value > Number.MAX_SAFE_INTEGER) {
        throw Errors.ZIP64_VALUE_TOO_LARGE();
      }
      return value;
    };
    Utils.writeBigUInt64LE = function(buffer, value, index) {
      const lo = value >>> 0;
      const hi = Math.floor(value / 4294967296) >>> 0;
      buffer.writeUInt32LE(lo, index);
      buffer.writeUInt32LE(hi, index + 4);
    };
    Utils.fromDOS2Date = function(val) {
      return new Date((val >> 25 & 127) + 1980, Math.max((val >> 21 & 15) - 1, 0), Math.max(val >> 16 & 31, 1), val >> 11 & 31, val >> 5 & 63, (val & 31) << 1);
    };
    Utils.fromDate2DOS = function(val) {
      let date = 0;
      let time = 0;
      if (val.getFullYear() > 1979) {
        date = (val.getFullYear() - 1980 & 127) << 9 | val.getMonth() + 1 << 5 | val.getDate();
        time = val.getHours() << 11 | val.getMinutes() << 5 | val.getSeconds() >> 1;
      }
      return date << 16 | time;
    };
    Utils.isWin = isWin;
    Utils.crcTable = crcTable;
  }
});

// node_modules/adm-zip/util/fattr.js
var require_fattr = __commonJS({
  "node_modules/adm-zip/util/fattr.js"(exports2, module2) {
    var pth = require("path");
    module2.exports = function(path5, { fs: fs6 }) {
      var _path = path5 || "", _obj = newAttr(), _stat = null;
      function newAttr() {
        return {
          directory: false,
          readonly: false,
          hidden: false,
          executable: false,
          mtime: 0,
          atime: 0
        };
      }
      if (_path && fs6.existsSync(_path)) {
        _stat = fs6.statSync(_path);
        _obj.directory = _stat.isDirectory();
        _obj.mtime = _stat.mtime;
        _obj.atime = _stat.atime;
        _obj.executable = (73 & _stat.mode) !== 0;
        _obj.readonly = (128 & _stat.mode) === 0;
        _obj.hidden = pth.basename(_path)[0] === ".";
      } else {
        console.warn("Invalid path: " + _path);
      }
      return {
        get directory() {
          return _obj.directory;
        },
        get readOnly() {
          return _obj.readonly;
        },
        get hidden() {
          return _obj.hidden;
        },
        get mtime() {
          return _obj.mtime;
        },
        get atime() {
          return _obj.atime;
        },
        get executable() {
          return _obj.executable;
        },
        decodeAttributes: function() {
        },
        encodeAttributes: function() {
        },
        toJSON: function() {
          return {
            path: _path,
            isDirectory: _obj.directory,
            isReadOnly: _obj.readonly,
            isHidden: _obj.hidden,
            isExecutable: _obj.executable,
            mTime: _obj.mtime,
            aTime: _obj.atime
          };
        },
        toString: function() {
          return JSON.stringify(this.toJSON(), null, "	");
        }
      };
    };
  }
});

// node_modules/adm-zip/util/decoder.js
var require_decoder = __commonJS({
  "node_modules/adm-zip/util/decoder.js"(exports2, module2) {
    module2.exports = {
      efs: true,
      encode: (data) => Buffer.from(data, "utf8"),
      decode: (data) => data.toString("utf8")
    };
  }
});

// node_modules/adm-zip/util/index.js
var require_util = __commonJS({
  "node_modules/adm-zip/util/index.js"(exports2, module2) {
    module2.exports = require_utils();
    module2.exports.Constants = require_constants();
    module2.exports.Errors = require_errors();
    module2.exports.FileAttr = require_fattr();
    module2.exports.decoder = require_decoder();
  }
});

// node_modules/adm-zip/headers/entryHeader.js
var require_entryHeader = __commonJS({
  "node_modules/adm-zip/headers/entryHeader.js"(exports2, module2) {
    var Utils = require_util();
    var Constants = Utils.Constants;
    module2.exports = function() {
      var _verMade = 20, _version = 10, _flags = 0, _method = 0, _time = 0, _crc = 0, _compressedSize = 0, _size = 0, _fnameLen = 0, _extraLen = 0, _comLen = 0, _diskStart = 0, _inattr = 0, _attr = 0, _offset = 0;
      _verMade |= Utils.isWin ? 2560 : 768;
      _flags |= Constants.FLG_EFS;
      const _localHeader = {
        extraLen: 0
      };
      const uint32 = (val) => Math.max(0, val) >>> 0;
      const uint16 = (val) => Math.max(0, val) & 65535;
      const uint8 = (val) => Math.max(0, val) & 255;
      _time = Utils.fromDate2DOS(/* @__PURE__ */ new Date());
      return {
        get made() {
          return _verMade;
        },
        set made(val) {
          _verMade = val;
        },
        get version() {
          return _version;
        },
        set version(val) {
          _version = val;
        },
        get flags() {
          return _flags;
        },
        set flags(val) {
          _flags = val;
        },
        get flags_efs() {
          return (_flags & Constants.FLG_EFS) > 0;
        },
        set flags_efs(val) {
          if (val) {
            _flags |= Constants.FLG_EFS;
          } else {
            _flags &= ~Constants.FLG_EFS;
          }
        },
        get flags_desc() {
          return (_flags & Constants.FLG_DESC) > 0;
        },
        set flags_desc(val) {
          if (val) {
            _flags |= Constants.FLG_DESC;
          } else {
            _flags &= ~Constants.FLG_DESC;
          }
        },
        get method() {
          return _method;
        },
        set method(val) {
          switch (val) {
            case Constants.STORED:
              this.version = 10;
              break;
            case Constants.DEFLATED:
            default:
              this.version = 20;
          }
          _method = val;
        },
        get time() {
          return Utils.fromDOS2Date(this.timeval);
        },
        set time(val) {
          val = new Date(val);
          this.timeval = Utils.fromDate2DOS(val);
        },
        get timeval() {
          return _time;
        },
        set timeval(val) {
          _time = uint32(val);
        },
        get timeHighByte() {
          return uint8(_time >>> 8);
        },
        get crc() {
          return _crc;
        },
        set crc(val) {
          _crc = uint32(val);
        },
        get compressedSize() {
          return _compressedSize;
        },
        set compressedSize(val) {
          _compressedSize = uint32(val);
        },
        get size() {
          return _size;
        },
        set size(val) {
          _size = uint32(val);
        },
        get fileNameLength() {
          return _fnameLen;
        },
        set fileNameLength(val) {
          _fnameLen = val;
        },
        get extraLength() {
          return _extraLen;
        },
        set extraLength(val) {
          _extraLen = val;
        },
        get extraLocalLength() {
          return _localHeader.extraLen;
        },
        set extraLocalLength(val) {
          _localHeader.extraLen = val;
        },
        get commentLength() {
          return _comLen;
        },
        set commentLength(val) {
          _comLen = val;
        },
        get diskNumStart() {
          return _diskStart;
        },
        set diskNumStart(val) {
          _diskStart = uint32(val);
        },
        get inAttr() {
          return _inattr;
        },
        set inAttr(val) {
          _inattr = uint32(val);
        },
        get attr() {
          return _attr;
        },
        set attr(val) {
          _attr = uint32(val);
        },
        // get Unix file permissions
        get fileAttr() {
          return (_attr || 0) >> 16 & 511;
        },
        get offset() {
          return _offset;
        },
        set offset(val) {
          _offset = uint32(val);
        },
        get encrypted() {
          return (_flags & Constants.FLG_ENC) === Constants.FLG_ENC;
        },
        get centralHeaderSize() {
          return Constants.CENHDR + _fnameLen + _extraLen + _comLen;
        },
        get realDataOffset() {
          return _offset + Constants.LOCHDR + _localHeader.fnameLen + _localHeader.extraLen;
        },
        get localHeader() {
          return _localHeader;
        },
        loadLocalHeaderFromBinary: function(input) {
          if (_offset < 0 || _offset + Constants.LOCHDR > input.length) {
            throw Utils.Errors.INVALID_LOC();
          }
          var data = input.slice(_offset, _offset + Constants.LOCHDR);
          if (data.readUInt32LE(0) !== Constants.LOCSIG) {
            throw Utils.Errors.INVALID_LOC();
          }
          _localHeader.version = data.readUInt16LE(Constants.LOCVER);
          _localHeader.flags = data.readUInt16LE(Constants.LOCFLG);
          _localHeader.flags_desc = (_localHeader.flags & Constants.FLG_DESC) > 0;
          _localHeader.method = data.readUInt16LE(Constants.LOCHOW);
          _localHeader.time = data.readUInt32LE(Constants.LOCTIM);
          _localHeader.crc = data.readUInt32LE(Constants.LOCCRC);
          _localHeader.compressedSize = data.readUInt32LE(Constants.LOCSIZ);
          _localHeader.size = data.readUInt32LE(Constants.LOCLEN);
          _localHeader.fnameLen = data.readUInt16LE(Constants.LOCNAM);
          _localHeader.extraLen = data.readUInt16LE(Constants.LOCEXT);
          const extraStart = _offset + Constants.LOCHDR + _localHeader.fnameLen;
          const extraEnd = extraStart + _localHeader.extraLen;
          return input.slice(extraStart, extraEnd);
        },
        loadFromBinary: function(data) {
          if (data.length !== Constants.CENHDR || data.readUInt32LE(0) !== Constants.CENSIG) {
            throw Utils.Errors.INVALID_CEN();
          }
          _verMade = data.readUInt16LE(Constants.CENVEM);
          _version = data.readUInt16LE(Constants.CENVER);
          _flags = data.readUInt16LE(Constants.CENFLG);
          _method = data.readUInt16LE(Constants.CENHOW);
          _time = data.readUInt32LE(Constants.CENTIM);
          _crc = data.readUInt32LE(Constants.CENCRC);
          _compressedSize = data.readUInt32LE(Constants.CENSIZ);
          _size = data.readUInt32LE(Constants.CENLEN);
          _fnameLen = data.readUInt16LE(Constants.CENNAM);
          _extraLen = data.readUInt16LE(Constants.CENEXT);
          _comLen = data.readUInt16LE(Constants.CENCOM);
          _diskStart = data.readUInt16LE(Constants.CENDSK);
          _inattr = data.readUInt16LE(Constants.CENATT);
          _attr = data.readUInt32LE(Constants.CENATX);
          _offset = data.readUInt32LE(Constants.CENOFF);
        },
        localHeaderToBinary: function() {
          var data = Buffer.alloc(Constants.LOCHDR);
          data.writeUInt32LE(Constants.LOCSIG, 0);
          data.writeUInt16LE(_version, Constants.LOCVER);
          data.writeUInt16LE(_flags & ~Constants.FLG_DESC, Constants.LOCFLG);
          data.writeUInt16LE(_method, Constants.LOCHOW);
          data.writeUInt32LE(_time, Constants.LOCTIM);
          data.writeUInt32LE(_crc, Constants.LOCCRC);
          data.writeUInt32LE(_compressedSize, Constants.LOCSIZ);
          data.writeUInt32LE(_size, Constants.LOCLEN);
          data.writeUInt16LE(_fnameLen, Constants.LOCNAM);
          data.writeUInt16LE(_localHeader.extraLen, Constants.LOCEXT);
          return data;
        },
        centralHeaderToBinary: function() {
          var data = Buffer.alloc(Constants.CENHDR + _fnameLen + _extraLen + _comLen);
          data.writeUInt32LE(Constants.CENSIG, 0);
          data.writeUInt16LE(_verMade, Constants.CENVEM);
          data.writeUInt16LE(_version, Constants.CENVER);
          data.writeUInt16LE(_flags & ~Constants.FLG_DESC, Constants.CENFLG);
          data.writeUInt16LE(_method, Constants.CENHOW);
          data.writeUInt32LE(_time, Constants.CENTIM);
          data.writeUInt32LE(_crc, Constants.CENCRC);
          data.writeUInt32LE(_compressedSize, Constants.CENSIZ);
          data.writeUInt32LE(_size, Constants.CENLEN);
          data.writeUInt16LE(_fnameLen, Constants.CENNAM);
          data.writeUInt16LE(_extraLen, Constants.CENEXT);
          data.writeUInt16LE(_comLen, Constants.CENCOM);
          data.writeUInt16LE(_diskStart, Constants.CENDSK);
          data.writeUInt16LE(_inattr, Constants.CENATT);
          data.writeUInt32LE(_attr, Constants.CENATX);
          data.writeUInt32LE(_offset, Constants.CENOFF);
          return data;
        },
        toJSON: function() {
          const bytes = function(nr) {
            return nr + " bytes";
          };
          return {
            made: _verMade,
            version: _version,
            flags: _flags,
            method: Utils.methodToString(_method),
            time: this.time,
            crc: "0x" + _crc.toString(16).toUpperCase(),
            compressedSize: bytes(_compressedSize),
            size: bytes(_size),
            fileNameLength: bytes(_fnameLen),
            extraLength: bytes(_extraLen),
            commentLength: bytes(_comLen),
            diskNumStart: _diskStart,
            inAttr: _inattr,
            attr: _attr,
            offset: _offset,
            centralHeaderSize: bytes(Constants.CENHDR + _fnameLen + _extraLen + _comLen)
          };
        },
        toString: function() {
          return JSON.stringify(this.toJSON(), null, "	");
        }
      };
    };
  }
});

// node_modules/adm-zip/headers/mainHeader.js
var require_mainHeader = __commonJS({
  "node_modules/adm-zip/headers/mainHeader.js"(exports2, module2) {
    var Utils = require_util();
    var Constants = Utils.Constants;
    module2.exports = function() {
      var _volumeEntries = 0, _totalEntries = 0, _size = 0, _offset = 0, _commentLength = 0;
      const needsZip64 = () => _volumeEntries > Constants.EF_ZIP64_OR_16 || _totalEntries > Constants.EF_ZIP64_OR_16 || _size > Constants.EF_ZIP64_OR_32 || _offset > Constants.EF_ZIP64_OR_32;
      return {
        get diskEntries() {
          return _volumeEntries;
        },
        set diskEntries(val) {
          _volumeEntries = _totalEntries = val;
        },
        get totalEntries() {
          return _totalEntries;
        },
        set totalEntries(val) {
          _totalEntries = _volumeEntries = val;
        },
        get size() {
          return _size;
        },
        set size(val) {
          _size = val;
        },
        get offset() {
          return _offset;
        },
        set offset(val) {
          _offset = val;
        },
        get commentLength() {
          return _commentLength;
        },
        set commentLength(val) {
          _commentLength = val;
        },
        get mainHeaderSize() {
          return (needsZip64() ? Constants.ZIP64HDR + Constants.END64HDR : 0) + Constants.ENDHDR + _commentLength;
        },
        loadFromBinary: function(data) {
          if ((data.length !== Constants.ENDHDR || data.readUInt32LE(0) !== Constants.ENDSIG) && (data.length < Constants.ZIP64HDR || data.readUInt32LE(0) !== Constants.ZIP64SIG)) {
            throw Utils.Errors.INVALID_END();
          }
          if (data.readUInt32LE(0) === Constants.ENDSIG) {
            _volumeEntries = data.readUInt16LE(Constants.ENDSUB);
            _totalEntries = data.readUInt16LE(Constants.ENDTOT);
            _size = data.readUInt32LE(Constants.ENDSIZ);
            _offset = data.readUInt32LE(Constants.ENDOFF);
            _commentLength = data.readUInt16LE(Constants.ENDCOM);
          } else {
            _volumeEntries = Utils.readBigUInt64LE(data, Constants.ZIP64SUB);
            _totalEntries = Utils.readBigUInt64LE(data, Constants.ZIP64TOT);
            _size = Utils.readBigUInt64LE(data, Constants.ZIP64SIZB);
            _offset = Utils.readBigUInt64LE(data, Constants.ZIP64OFF);
            _commentLength = 0;
          }
        },
        toBinary: function() {
          if (!needsZip64()) {
            var b = Buffer.alloc(Constants.ENDHDR + _commentLength);
            b.writeUInt32LE(Constants.ENDSIG, 0);
            b.writeUInt32LE(0, 4);
            b.writeUInt16LE(_volumeEntries, Constants.ENDSUB);
            b.writeUInt16LE(_totalEntries, Constants.ENDTOT);
            b.writeUInt32LE(_size, Constants.ENDSIZ);
            b.writeUInt32LE(_offset, Constants.ENDOFF);
            b.writeUInt16LE(_commentLength, Constants.ENDCOM);
            b.fill(" ", Constants.ENDHDR);
            return b;
          }
          var b = Buffer.alloc(this.mainHeaderSize);
          let offset = 0;
          b.writeUInt32LE(Constants.ZIP64SIG, offset);
          Utils.writeBigUInt64LE(b, Constants.ZIP64HDR - Constants.ZIP64LEAD, offset + Constants.ZIP64SIZE);
          b.writeUInt16LE(45, offset + Constants.ZIP64VEM);
          b.writeUInt16LE(45, offset + Constants.ZIP64VER);
          b.writeUInt32LE(0, offset + Constants.ZIP64DSK);
          b.writeUInt32LE(0, offset + Constants.ZIP64DSKDIR);
          Utils.writeBigUInt64LE(b, _volumeEntries, offset + Constants.ZIP64SUB);
          Utils.writeBigUInt64LE(b, _totalEntries, offset + Constants.ZIP64TOT);
          Utils.writeBigUInt64LE(b, _size, offset + Constants.ZIP64SIZB);
          Utils.writeBigUInt64LE(b, _offset, offset + Constants.ZIP64OFF);
          const zip64EndOffset = _offset + _size;
          offset += Constants.ZIP64HDR;
          b.writeUInt32LE(Constants.END64SIG, offset);
          b.writeUInt32LE(0, offset + Constants.END64START);
          Utils.writeBigUInt64LE(b, zip64EndOffset, offset + Constants.END64OFF);
          b.writeUInt32LE(1, offset + Constants.END64NUMDISKS);
          offset += Constants.END64HDR;
          b.writeUInt32LE(Constants.ENDSIG, offset);
          b.writeUInt32LE(0, offset + 4);
          b.writeUInt16LE(Math.min(_volumeEntries, Constants.EF_ZIP64_OR_16), offset + Constants.ENDSUB);
          b.writeUInt16LE(Math.min(_totalEntries, Constants.EF_ZIP64_OR_16), offset + Constants.ENDTOT);
          b.writeUInt32LE(Math.min(_size, Constants.EF_ZIP64_OR_32), offset + Constants.ENDSIZ);
          b.writeUInt32LE(Math.min(_offset, Constants.EF_ZIP64_OR_32), offset + Constants.ENDOFF);
          b.writeUInt16LE(_commentLength, offset + Constants.ENDCOM);
          b.fill(" ", offset + Constants.ENDHDR);
          return b;
        },
        toJSON: function() {
          const offset = function(nr, len) {
            let offs = nr.toString(16).toUpperCase();
            while (offs.length < len) offs = "0" + offs;
            return "0x" + offs;
          };
          return {
            diskEntries: _volumeEntries,
            totalEntries: _totalEntries,
            size: _size + " bytes",
            offset: offset(_offset, 4),
            commentLength: _commentLength
          };
        },
        toString: function() {
          return JSON.stringify(this.toJSON(), null, "	");
        }
      };
    };
  }
});

// node_modules/adm-zip/headers/index.js
var require_headers = __commonJS({
  "node_modules/adm-zip/headers/index.js"(exports2) {
    exports2.EntryHeader = require_entryHeader();
    exports2.MainHeader = require_mainHeader();
  }
});

// node_modules/adm-zip/methods/deflater.js
var require_deflater = __commonJS({
  "node_modules/adm-zip/methods/deflater.js"(exports2, module2) {
    module2.exports = function(inbuf) {
      var zlib = require("zlib");
      var opts = { chunkSize: (parseInt(inbuf.length / 1024) + 1) * 1024 };
      return {
        deflate: function() {
          return zlib.deflateRawSync(inbuf, opts);
        },
        deflateAsync: function(callback) {
          var tmp = zlib.createDeflateRaw(opts), parts = [], total = 0;
          tmp.on("data", function(data) {
            parts.push(data);
            total += data.length;
          });
          tmp.on("end", function() {
            var buf = Buffer.alloc(total), written = 0;
            buf.fill(0);
            for (var i = 0; i < parts.length; i++) {
              var part = parts[i];
              part.copy(buf, written);
              written += part.length;
            }
            callback && callback(buf);
          });
          tmp.end(inbuf);
        }
      };
    };
  }
});

// node_modules/adm-zip/methods/inflater.js
var require_inflater = __commonJS({
  "node_modules/adm-zip/methods/inflater.js"(exports2, module2) {
    var version = +(process?.versions?.node ?? "").split(".")[0] || 0;
    var Errors = require_errors();
    module2.exports = function(inbuf, expectedLength) {
      var zlib = require("zlib");
      const maxOutputLength = expectedLength > 0 ? expectedLength : 1;
      const option = version >= 15 ? { maxOutputLength } : {};
      return {
        inflate: function() {
          return zlib.inflateRawSync(inbuf, option);
        },
        inflateAsync: function(callback) {
          var tmp = zlib.createInflateRaw(option), parts = [], total = 0, done = false;
          const fail = function(err) {
            if (done) return;
            done = true;
            tmp.destroy();
            callback && callback(Buffer.alloc(0), err);
          };
          tmp.on("error", function(err) {
            fail(err);
          });
          tmp.on("data", function(data) {
            if (done) return;
            total += data.length;
            if (total > maxOutputLength) {
              return fail(Errors.MAX_OUTPUT_EXCEEDED());
            }
            parts.push(data);
          });
          tmp.on("end", function() {
            if (done) return;
            done = true;
            var buf = Buffer.alloc(total), written = 0;
            buf.fill(0);
            for (var i = 0; i < parts.length; i++) {
              var part = parts[i];
              part.copy(buf, written);
              written += part.length;
            }
            callback && callback(buf);
          });
          tmp.end(inbuf);
        }
      };
    };
  }
});

// node_modules/adm-zip/methods/zipcrypto.js
var require_zipcrypto = __commonJS({
  "node_modules/adm-zip/methods/zipcrypto.js"(exports2, module2) {
    "use strict";
    var { randomFillSync } = require("crypto");
    var Errors = require_errors();
    var crctable = new Uint32Array(256).map((t, crc) => {
      for (let j = 0; j < 8; j++) {
        if (0 !== (crc & 1)) {
          crc = crc >>> 1 ^ 3988292384;
        } else {
          crc >>>= 1;
        }
      }
      return crc >>> 0;
    });
    var uMul = (a, b) => Math.imul(a, b) >>> 0;
    var crc32update = (pCrc32, bval) => {
      return crctable[(pCrc32 ^ bval) & 255] ^ pCrc32 >>> 8;
    };
    var genSalt = () => {
      if ("function" === typeof randomFillSync) {
        return randomFillSync(Buffer.alloc(12));
      } else {
        return genSalt.node();
      }
    };
    genSalt.node = () => {
      const salt = Buffer.alloc(12);
      const len = salt.length;
      for (let i = 0; i < len; i++) salt[i] = Math.random() * 256 & 255;
      return salt;
    };
    var config = {
      genSalt
    };
    function Initkeys(pw) {
      const pass = Buffer.isBuffer(pw) ? pw : Buffer.from(pw);
      this.keys = new Uint32Array([305419896, 591751049, 878082192]);
      for (let i = 0; i < pass.length; i++) {
        this.updateKeys(pass[i]);
      }
    }
    Initkeys.prototype.updateKeys = function(byteValue) {
      const keys = this.keys;
      keys[0] = crc32update(keys[0], byteValue);
      keys[1] += keys[0] & 255;
      keys[1] = uMul(keys[1], 134775813) + 1;
      keys[2] = crc32update(keys[2], keys[1] >>> 24);
      return byteValue;
    };
    Initkeys.prototype.next = function() {
      const k = (this.keys[2] | 2) >>> 0;
      return uMul(k, k ^ 1) >> 8 & 255;
    };
    function make_decrypter(pwd) {
      const keys = new Initkeys(pwd);
      return function(data) {
        const result = Buffer.alloc(data.length);
        let pos = 0;
        for (let c of data) {
          result[pos++] = keys.updateKeys(c ^ keys.next());
        }
        return result;
      };
    }
    function make_encrypter(pwd) {
      const keys = new Initkeys(pwd);
      return function(data, result, pos = 0) {
        if (!result) result = Buffer.alloc(data.length);
        for (let c of data) {
          const k = keys.next();
          result[pos++] = c ^ k;
          keys.updateKeys(c);
        }
        return result;
      };
    }
    function decrypt(data, header, pwd) {
      if (!data || !Buffer.isBuffer(data) || data.length < 12) {
        return Buffer.alloc(0);
      }
      const decrypter = make_decrypter(pwd);
      const salt = decrypter(data.slice(0, 12));
      const verifyByte = (header.flags & 8) === 8 ? header.timeHighByte : header.crc >>> 24;
      if (salt[11] !== verifyByte) {
        throw Errors.WRONG_PASSWORD();
      }
      return decrypter(data.slice(12));
    }
    function _salter(data) {
      if (Buffer.isBuffer(data) && data.length >= 12) {
        config.genSalt = function() {
          return data.slice(0, 12);
        };
      } else if (data === "node") {
        config.genSalt = genSalt.node;
      } else {
        config.genSalt = genSalt;
      }
    }
    function encrypt(data, header, pwd, oldlike = false) {
      if (data == null) data = Buffer.alloc(0);
      if (!Buffer.isBuffer(data)) data = Buffer.from(data.toString());
      const encrypter = make_encrypter(pwd);
      const salt = config.genSalt();
      salt[11] = header.crc >>> 24 & 255;
      if (oldlike) salt[10] = header.crc >>> 16 & 255;
      const result = Buffer.alloc(data.length + 12);
      encrypter(salt, result);
      return encrypter(data, result, 12);
    }
    module2.exports = { decrypt, encrypt, _salter };
  }
});

// node_modules/adm-zip/methods/index.js
var require_methods = __commonJS({
  "node_modules/adm-zip/methods/index.js"(exports2) {
    exports2.Deflater = require_deflater();
    exports2.Inflater = require_inflater();
    exports2.ZipCrypto = require_zipcrypto();
  }
});

// node_modules/adm-zip/zipEntry.js
var require_zipEntry = __commonJS({
  "node_modules/adm-zip/zipEntry.js"(exports2, module2) {
    var Utils = require_util();
    var Headers = require_headers();
    var Constants = Utils.Constants;
    var Methods = require_methods();
    module2.exports = function(options, input) {
      var _centralHeader = new Headers.EntryHeader(), _entryName = Buffer.alloc(0), _comment = Buffer.alloc(0), _isDirectory = false, uncompressedData = null, _extra = Buffer.alloc(0), _extralocal = Buffer.alloc(0), _efs = true;
      const opts = options;
      const decoder = typeof opts.decoder === "object" ? opts.decoder : Utils.decoder;
      _efs = decoder.hasOwnProperty("efs") ? decoder.efs : false;
      function getCompressedDataFromZip() {
        if (!input || !(input instanceof Uint8Array)) {
          return Buffer.alloc(0);
        }
        _extralocal = _centralHeader.loadLocalHeaderFromBinary(input);
        const dataOffset = _centralHeader.realDataOffset;
        const dataEnd = dataOffset + _centralHeader.compressedSize;
        if (dataOffset < 0 || dataEnd < dataOffset || dataEnd > input.length) {
          throw Utils.Errors.INVALID_LOC();
        }
        return input.slice(dataOffset, dataEnd);
      }
      function crc32OK(data) {
        const expectedCrc = _centralHeader.flags_desc || _centralHeader.localHeader.flags_desc ? _centralHeader.crc : _centralHeader.localHeader.crc;
        return Utils.crc32(data) === expectedCrc;
      }
      function decompress(async, callback, pass) {
        if (typeof callback === "undefined" && typeof async === "string") {
          pass = async;
          async = void 0;
        }
        if (_isDirectory) {
          if (async && callback) {
            callback(Buffer.alloc(0), Utils.Errors.DIRECTORY_CONTENT_ERROR());
          }
          return Buffer.alloc(0);
        }
        var compressedData;
        try {
          compressedData = getCompressedDataFromZip();
          if (compressedData.length === 0) {
            if (async && callback) callback(compressedData);
            return compressedData;
          }
          if (_centralHeader.encrypted) {
            if ("string" !== typeof pass && !Buffer.isBuffer(pass)) {
              throw Utils.Errors.INVALID_PASS_PARAM();
            }
            compressedData = Methods.ZipCrypto.decrypt(compressedData, _centralHeader, pass);
          }
        } catch (err) {
          if (async && callback) {
            callback(Buffer.alloc(0), err);
            return Buffer.alloc(0);
          }
          throw err;
        }
        var data;
        switch (_centralHeader.method) {
          case Utils.Constants.STORED:
            data = Buffer.alloc(compressedData.length);
            compressedData.copy(data);
            if (!crc32OK(data)) {
              if (async && callback) callback(data, Utils.Errors.BAD_CRC());
              throw Utils.Errors.BAD_CRC();
            } else {
              if (async && callback) callback(data);
              return data;
            }
          case Utils.Constants.DEFLATED:
            var inflater = new Methods.Inflater(compressedData, _centralHeader.size);
            if (!async) {
              data = inflater.inflate();
              if (!crc32OK(data)) {
                throw Utils.Errors.BAD_CRC(`"${decoder.decode(_entryName)}"`);
              }
              return data;
            } else {
              inflater.inflateAsync(function(result, err) {
                if (!callback) return;
                if (err) {
                  callback(Buffer.alloc(0), err);
                } else if (!crc32OK(result)) {
                  callback(result, Utils.Errors.BAD_CRC());
                } else {
                  callback(result);
                }
              });
            }
            break;
          default:
            if (async && callback) callback(Buffer.alloc(0), Utils.Errors.UNKNOWN_METHOD());
            throw Utils.Errors.UNKNOWN_METHOD();
        }
      }
      function compress(async, callback) {
        if ((!uncompressedData || !uncompressedData.length) && Buffer.isBuffer(input)) {
          if (async && callback) callback(getCompressedDataFromZip());
          return getCompressedDataFromZip();
        }
        if (uncompressedData.length && !_isDirectory) {
          var compressedData;
          switch (_centralHeader.method) {
            case Utils.Constants.STORED:
              _centralHeader.compressedSize = _centralHeader.size;
              compressedData = Buffer.alloc(uncompressedData.length);
              uncompressedData.copy(compressedData);
              if (async && callback) callback(compressedData);
              return compressedData;
            default:
            case Utils.Constants.DEFLATED:
              var deflater = new Methods.Deflater(uncompressedData);
              if (!async) {
                var deflated = deflater.deflate();
                _centralHeader.compressedSize = deflated.length;
                return deflated;
              } else {
                deflater.deflateAsync(function(data) {
                  compressedData = Buffer.alloc(data.length);
                  _centralHeader.compressedSize = data.length;
                  data.copy(compressedData);
                  callback && callback(compressedData);
                });
              }
              deflater = null;
              break;
          }
        } else if (async && callback) {
          callback(Buffer.alloc(0));
        } else {
          return Buffer.alloc(0);
        }
      }
      function readUInt64LE(buffer, offset) {
        return Utils.readBigUInt64LE(buffer, offset);
      }
      function parseExtra(data) {
        try {
          var offset = 0;
          var signature, size, part;
          while (offset + 4 < data.length) {
            signature = data.readUInt16LE(offset);
            offset += 2;
            size = data.readUInt16LE(offset);
            offset += 2;
            part = data.slice(offset, offset + size);
            offset += size;
            if (Constants.ID_ZIP64 === signature) {
              parseZip64ExtendedInformation(part);
            }
          }
        } catch (error) {
          throw Utils.Errors.EXTRA_FIELD_PARSE_ERROR();
        }
      }
      function parseZip64ExtendedInformation(data) {
        var size, compressedSize, offset, diskNumStart;
        if (data.length >= Constants.EF_ZIP64_SCOMP) {
          size = readUInt64LE(data, Constants.EF_ZIP64_SUNCOMP);
          if (_centralHeader.size === Constants.EF_ZIP64_OR_32) {
            _centralHeader.size = size;
          }
        }
        if (data.length >= Constants.EF_ZIP64_RHO) {
          compressedSize = readUInt64LE(data, Constants.EF_ZIP64_SCOMP);
          if (_centralHeader.compressedSize === Constants.EF_ZIP64_OR_32) {
            _centralHeader.compressedSize = compressedSize;
          }
        }
        if (data.length >= Constants.EF_ZIP64_DSN) {
          offset = readUInt64LE(data, Constants.EF_ZIP64_RHO);
          if (_centralHeader.offset === Constants.EF_ZIP64_OR_32) {
            _centralHeader.offset = offset;
          }
        }
        if (data.length >= Constants.EF_ZIP64_DSN + 4) {
          diskNumStart = data.readUInt32LE(Constants.EF_ZIP64_DSN);
          if (_centralHeader.diskNumStart === Constants.EF_ZIP64_OR_16) {
            _centralHeader.diskNumStart = diskNumStart;
          }
        }
      }
      return {
        get entryName() {
          return decoder.decode(_entryName);
        },
        get rawEntryName() {
          return _entryName;
        },
        set entryName(val) {
          _entryName = Utils.toBuffer(val, decoder.encode);
          var lastChar = _entryName[_entryName.length - 1];
          _isDirectory = lastChar === 47 || lastChar === 92;
          _centralHeader.fileNameLength = _entryName.length;
        },
        get efs() {
          if (typeof _efs === "function") {
            return _efs(this.entryName);
          } else {
            return _efs;
          }
        },
        get extra() {
          return _extra;
        },
        set extra(val) {
          _extra = val;
          _centralHeader.extraLength = val.length;
          parseExtra(val);
        },
        get comment() {
          return decoder.decode(_comment);
        },
        set comment(val) {
          _comment = Utils.toBuffer(val, decoder.encode);
          _centralHeader.commentLength = _comment.length;
          if (_comment.length > 65535) throw Utils.Errors.COMMENT_TOO_LONG();
        },
        get name() {
          const n = decoder.decode(_entryName);
          return _isDirectory ? n.replace(/[/\\]$/, "").split("/").pop() : n.split("/").pop();
        },
        get isDirectory() {
          return _isDirectory;
        },
        getCompressedData: function() {
          return compress(false, null);
        },
        getCompressedDataAsync: function(callback) {
          compress(true, callback);
        },
        setData: function(value) {
          uncompressedData = Utils.toBuffer(value, Utils.decoder.encode);
          if (!_isDirectory && uncompressedData.length) {
            _centralHeader.size = uncompressedData.length;
            _centralHeader.method = Utils.Constants.DEFLATED;
            _centralHeader.crc = Utils.crc32(value);
            _centralHeader.changed = true;
          } else {
            _centralHeader.method = Utils.Constants.STORED;
          }
        },
        getData: function(pass) {
          if (_centralHeader.changed) {
            return uncompressedData;
          } else {
            return decompress(false, null, pass);
          }
        },
        getDataAsync: function(callback, pass) {
          if (_centralHeader.changed) {
            callback(uncompressedData);
          } else {
            decompress(true, callback, pass);
          }
        },
        set attr(attr) {
          _centralHeader.attr = attr;
        },
        get attr() {
          return _centralHeader.attr;
        },
        set header(data) {
          _centralHeader.loadFromBinary(data);
        },
        get header() {
          return _centralHeader;
        },
        packCentralHeader: function() {
          _centralHeader.flags_efs = this.efs;
          _centralHeader.extraLength = _extra.length;
          var header = _centralHeader.centralHeaderToBinary();
          var addpos = Utils.Constants.CENHDR;
          _entryName.copy(header, addpos);
          addpos += _entryName.length;
          _extra.copy(header, addpos);
          addpos += _centralHeader.extraLength;
          _comment.copy(header, addpos);
          return header;
        },
        packLocalHeader: function() {
          let addpos = 0;
          _centralHeader.flags_efs = this.efs;
          _centralHeader.extraLocalLength = _extralocal.length;
          const localHeaderBuf = _centralHeader.localHeaderToBinary();
          const localHeader = Buffer.alloc(localHeaderBuf.length + _entryName.length + _centralHeader.extraLocalLength);
          localHeaderBuf.copy(localHeader, addpos);
          addpos += localHeaderBuf.length;
          _entryName.copy(localHeader, addpos);
          addpos += _entryName.length;
          _extralocal.copy(localHeader, addpos);
          addpos += _extralocal.length;
          return localHeader;
        },
        toJSON: function() {
          const bytes = function(nr) {
            return "<" + (nr && nr.length + " bytes buffer" || "null") + ">";
          };
          return {
            entryName: this.entryName,
            name: this.name,
            comment: this.comment,
            isDirectory: this.isDirectory,
            header: _centralHeader.toJSON(),
            compressedData: bytes(input),
            data: bytes(uncompressedData)
          };
        },
        toString: function() {
          return JSON.stringify(this.toJSON(), null, "	");
        }
      };
    };
  }
});

// node_modules/adm-zip/zipFile.js
var require_zipFile = __commonJS({
  "node_modules/adm-zip/zipFile.js"(exports2, module2) {
    var ZipEntry = require_zipEntry();
    var Headers = require_headers();
    var Utils = require_util();
    module2.exports = function(inBuffer, options) {
      var entryList = [], entryTable = /* @__PURE__ */ Object.create(null), _comment = Buffer.alloc(0), mainHeader = new Headers.MainHeader(), loadedEntries = false;
      var password = null;
      const temporary = /* @__PURE__ */ new Set();
      const opts = options;
      const { noSort, decoder } = opts;
      if (inBuffer) {
        readMainHeader(opts.readEntries);
      } else {
        loadedEntries = true;
      }
      function makeTemporaryFolders() {
        const foldersList = /* @__PURE__ */ new Set();
        for (const elem of Object.keys(entryTable)) {
          const elements = elem.split("/");
          elements.pop();
          if (!elements.length) continue;
          for (let i = 0; i < elements.length; i++) {
            const sub = elements.slice(0, i + 1).join("/") + "/";
            foldersList.add(sub);
          }
        }
        for (const elem of foldersList) {
          if (!(elem in entryTable)) {
            const tempfolder = new ZipEntry(opts);
            tempfolder.entryName = elem;
            tempfolder.attr = 16;
            tempfolder.temporary = true;
            entryList.push(tempfolder);
            entryTable[tempfolder.entryName] = tempfolder;
            temporary.add(tempfolder);
          }
        }
      }
      function readEntries() {
        loadedEntries = true;
        entryTable = /* @__PURE__ */ Object.create(null);
        if (mainHeader.diskEntries > (inBuffer.length - mainHeader.offset) / Utils.Constants.CENHDR) {
          throw Utils.Errors.DISK_ENTRY_TOO_LARGE();
        }
        entryList = new Array(mainHeader.diskEntries);
        var index = mainHeader.offset;
        for (var i = 0; i < entryList.length; i++) {
          var tmp = index, entry = new ZipEntry(opts, inBuffer);
          entry.header = inBuffer.slice(tmp, tmp += Utils.Constants.CENHDR);
          entry.entryName = inBuffer.slice(tmp, tmp += entry.header.fileNameLength);
          if (entry.header.extraLength) {
            entry.extra = inBuffer.slice(tmp, tmp += entry.header.extraLength);
          }
          if (entry.header.commentLength) entry.comment = inBuffer.slice(tmp, tmp + entry.header.commentLength);
          index += entry.header.centralHeaderSize;
          if (entry.entryName in entryTable) {
            throw Utils.Errors.DUPLICATE_ENTRY(`"${entry.entryName}"`);
          }
          entryList[i] = entry;
          entryTable[entry.entryName] = entry;
        }
        temporary.clear();
        makeTemporaryFolders();
      }
      function readMainHeader(readNow) {
        var i = inBuffer.length - Utils.Constants.ENDHDR, max = Math.max(0, i - 65535), n = max, endStart = inBuffer.length, endOffset = -1, commentEnd = 0;
        const trailingSpace = typeof opts.trailingSpace === "boolean" ? opts.trailingSpace : false;
        if (trailingSpace) max = 0;
        for (i; i >= n; i--) {
          if (inBuffer[i] !== 80) continue;
          if (inBuffer.readUInt32LE(i) === Utils.Constants.ENDSIG) {
            endOffset = i;
            commentEnd = i;
            endStart = i + Utils.Constants.ENDHDR;
            n = i - Utils.Constants.END64HDR;
            continue;
          }
          if (inBuffer.readUInt32LE(i) === Utils.Constants.END64SIG) {
            n = max;
            continue;
          }
          if (inBuffer.readUInt32LE(i) === Utils.Constants.ZIP64SIG) {
            endOffset = i;
            endStart = i + Utils.readBigUInt64LE(inBuffer, i + Utils.Constants.ZIP64SIZE) + Utils.Constants.ZIP64LEAD;
            break;
          }
        }
        if (endOffset == -1) throw Utils.Errors.INVALID_FORMAT();
        mainHeader.loadFromBinary(inBuffer.slice(endOffset, endStart));
        if (mainHeader.commentLength) {
          _comment = inBuffer.slice(commentEnd + Utils.Constants.ENDHDR);
        }
        if (readNow) readEntries();
      }
      function sortEntries() {
        if (entryList.length > 1 && !noSort) {
          entryList = entryList.map((entry) => ({ entry, key: entry.entryName.toLowerCase() })).sort((a, b) => a.key.localeCompare(b.key)).map((pair) => pair.entry);
        }
      }
      return {
        /**
         * Returns an array of ZipEntry objects existent in the current opened archive
         * @return Array
         */
        get entries() {
          if (!loadedEntries) {
            readEntries();
          }
          return entryList.filter((e) => !temporary.has(e));
        },
        /**
         * Archive comment
         * @return {String}
         */
        get comment() {
          return decoder.decode(_comment);
        },
        set comment(val) {
          _comment = Utils.toBuffer(val, decoder.encode);
          mainHeader.commentLength = _comment.length;
        },
        getEntryCount: function() {
          if (!loadedEntries) {
            return mainHeader.diskEntries;
          }
          return entryList.length;
        },
        forEach: function(callback) {
          this.entries.forEach(callback);
        },
        /**
         * Returns a reference to the entry with the given name or null if entry is inexistent
         *
         * @param entryName
         * @return ZipEntry
         */
        getEntry: function(entryName) {
          if (!loadedEntries) {
            readEntries();
          }
          return entryTable[entryName] || null;
        },
        /**
         * Adds the given entry to the entry list
         *
         * @param entry
         */
        setEntry: function(entry) {
          if (!loadedEntries) {
            readEntries();
          }
          entryList.push(entry);
          entryTable[entry.entryName] = entry;
          mainHeader.totalEntries = entryList.length;
        },
        /**
         * Removes the file with the given name from the entry list.
         *
         * If the entry is a directory, then all nested files and directories will be removed
         * @param entryName
         * @returns {void}
         */
        deleteFile: function(entryName, withsubfolders = true) {
          if (!loadedEntries) {
            readEntries();
          }
          const entry = entryTable[entryName];
          const list = this.getEntryChildren(entry, withsubfolders).map((child) => child.entryName);
          list.forEach(this.deleteEntry);
        },
        /**
         * Removes the entry with the given name from the entry list.
         *
         * @param {string} entryName
         * @returns {void}
         */
        deleteEntry: function(entryName) {
          if (!loadedEntries) {
            readEntries();
          }
          const entry = entryTable[entryName];
          const index = entryList.indexOf(entry);
          if (index >= 0) {
            entryList.splice(index, 1);
            delete entryTable[entryName];
            mainHeader.totalEntries = entryList.length;
          }
        },
        /**
         *  Iterates and returns all nested files and directories of the given entry
         *
         * @param entry
         * @return Array
         */
        getEntryChildren: function(entry, subfolders = true) {
          if (!loadedEntries) {
            readEntries();
          }
          if (typeof entry === "object") {
            if (entry.isDirectory && subfolders) {
              const list = [];
              const name = entry.entryName;
              for (const zipEntry of entryList) {
                if (zipEntry.entryName.startsWith(name)) {
                  list.push(zipEntry);
                }
              }
              return list;
            } else {
              return [entry];
            }
          }
          return [];
        },
        /**
         *  How many child elements entry has
         *
         * @param {ZipEntry} entry
         * @return {integer}
         */
        getChildCount: function(entry) {
          if (entry && entry.isDirectory) {
            const list = this.getEntryChildren(entry);
            return list.includes(entry) ? list.length - 1 : list.length;
          }
          return 0;
        },
        /**
         * Returns the zip file
         *
         * @return Buffer
         */
        compressToBuffer: function() {
          if (!loadedEntries) {
            readEntries();
          }
          sortEntries();
          const dataBlock = [];
          const headerBlocks = [];
          let totalSize = 0;
          let dindex = 0;
          mainHeader.size = 0;
          mainHeader.offset = 0;
          let totalEntries = 0;
          for (const entry of this.entries) {
            const compressedData = entry.getCompressedData();
            entry.header.offset = dindex;
            const localHeader = entry.packLocalHeader();
            const dataLength = localHeader.length + compressedData.length;
            dindex += dataLength;
            dataBlock.push(localHeader);
            dataBlock.push(compressedData);
            const centralHeader = entry.packCentralHeader();
            headerBlocks.push(centralHeader);
            mainHeader.size += centralHeader.length;
            totalSize += dataLength + centralHeader.length;
            totalEntries++;
          }
          totalSize += mainHeader.mainHeaderSize;
          mainHeader.offset = dindex;
          mainHeader.totalEntries = totalEntries;
          dindex = 0;
          const outBuffer = Buffer.alloc(totalSize);
          for (const content of dataBlock) {
            content.copy(outBuffer, dindex);
            dindex += content.length;
          }
          for (const content of headerBlocks) {
            content.copy(outBuffer, dindex);
            dindex += content.length;
          }
          const mh = mainHeader.toBinary();
          if (_comment) {
            _comment.copy(mh, mh.length - _comment.length);
          }
          mh.copy(outBuffer, dindex);
          inBuffer = outBuffer;
          loadedEntries = false;
          return outBuffer;
        },
        toAsyncBuffer: function(onSuccess, onFail, onItemStart, onItemEnd) {
          try {
            if (!loadedEntries) {
              readEntries();
            }
            sortEntries();
            const dataBlock = [];
            const centralHeaders = [];
            let totalSize = 0;
            let dindex = 0;
            let totalEntries = 0;
            mainHeader.size = 0;
            mainHeader.offset = 0;
            const compress2Buffer = function(entryLists) {
              if (entryLists.length > 0) {
                const entry = entryLists.shift();
                const name = entry.entryName + entry.extra.toString();
                if (onItemStart) onItemStart(name);
                entry.getCompressedDataAsync(function(compressedData) {
                  if (onItemEnd) onItemEnd(name);
                  entry.header.offset = dindex;
                  const localHeader = entry.packLocalHeader();
                  const dataLength = localHeader.length + compressedData.length;
                  dindex += dataLength;
                  dataBlock.push(localHeader);
                  dataBlock.push(compressedData);
                  const centalHeader = entry.packCentralHeader();
                  centralHeaders.push(centalHeader);
                  mainHeader.size += centalHeader.length;
                  totalSize += dataLength + centalHeader.length;
                  totalEntries++;
                  compress2Buffer(entryLists);
                });
              } else {
                totalSize += mainHeader.mainHeaderSize;
                mainHeader.offset = dindex;
                mainHeader.totalEntries = totalEntries;
                dindex = 0;
                const outBuffer = Buffer.alloc(totalSize);
                dataBlock.forEach(function(content) {
                  content.copy(outBuffer, dindex);
                  dindex += content.length;
                });
                centralHeaders.forEach(function(content) {
                  content.copy(outBuffer, dindex);
                  dindex += content.length;
                });
                const mh = mainHeader.toBinary();
                if (_comment) {
                  _comment.copy(mh, mh.length - _comment.length);
                }
                mh.copy(outBuffer, dindex);
                inBuffer = outBuffer;
                loadedEntries = false;
                onSuccess(outBuffer);
              }
            };
            compress2Buffer(Array.from(this.entries));
          } catch (e) {
            onFail(e);
          }
        }
      };
    };
  }
});

// node_modules/adm-zip/adm-zip.js
var require_adm_zip = __commonJS({
  "node_modules/adm-zip/adm-zip.js"(exports2, module2) {
    var Utils = require_util();
    var pth = require("path");
    var ZipEntry = require_zipEntry();
    var ZipFile = require_zipFile();
    var get_Bool = (...val) => Utils.findLast(val, (c) => typeof c === "boolean");
    var get_Str = (...val) => Utils.findLast(val, (c) => typeof c === "string");
    var get_Fun = (...val) => Utils.findLast(val, (c) => typeof c === "function");
    var defaultOptions = {
      // option "noSort" : if true it disables files sorting
      noSort: false,
      // read entries during load (initial loading may be slower)
      readEntries: false,
      // default method is none
      method: Utils.Constants.NONE,
      // file system
      fs: null
    };
    module2.exports = function(input, options) {
      let inBuffer = null;
      const opts = Object.assign(/* @__PURE__ */ Object.create(null), defaultOptions);
      if (input && "object" === typeof input) {
        if (!(input instanceof Uint8Array)) {
          Object.assign(opts, input);
          input = opts.input ? opts.input : void 0;
          if (opts.input) delete opts.input;
        }
        if (Buffer.isBuffer(input)) {
          inBuffer = input;
          opts.method = Utils.Constants.BUFFER;
          input = void 0;
        }
      }
      Object.assign(opts, options);
      const filetools = new Utils(opts);
      const applyDirAttributes = (dirEntries) => {
        dirEntries.filter((d) => d.attr).sort((a, b) => b.path.length - a.path.length).forEach((d) => filetools.fs.chmodSync(d.path, d.attr));
      };
      if (typeof opts.decoder !== "object" || typeof opts.decoder.encode !== "function" || typeof opts.decoder.decode !== "function") {
        opts.decoder = Utils.decoder;
      }
      if (input && "string" === typeof input) {
        if (filetools.fs.existsSync(input)) {
          opts.method = Utils.Constants.FILE;
          opts.filename = input;
          inBuffer = filetools.fs.readFileSync(input);
        } else {
          throw Utils.Errors.INVALID_FILENAME();
        }
      }
      const _zip = new ZipFile(inBuffer, opts);
      const { canonical, sanitize, zipnamefix } = Utils;
      function getEntry(entry) {
        if (entry && _zip) {
          var item;
          if (typeof entry === "string") item = _zip.getEntry(pth.posix.normalize(entry));
          if (typeof entry === "object" && typeof entry.entryName !== "undefined" && typeof entry.header !== "undefined") item = _zip.getEntry(entry.entryName);
          if (item) {
            return item;
          }
        }
        return null;
      }
      function fixPath(zipPath) {
        const { join, normalize, sep } = pth.posix;
        return join(pth.isAbsolute(zipPath) ? "/" : ".", normalize(sep + zipPath.split("\\").join(sep) + sep));
      }
      function filenameFilter(filterfn) {
        if (filterfn instanceof RegExp) {
          return /* @__PURE__ */ (function(rx) {
            return function(filename) {
              return rx.test(filename);
            };
          })(filterfn);
        } else if ("function" !== typeof filterfn) {
          return () => true;
        }
        return filterfn;
      }
      const relativePath = (local, entry) => {
        let lastChar = entry.slice(-1);
        lastChar = lastChar === filetools.sep ? filetools.sep : "";
        return pth.relative(local, entry) + lastChar;
      };
      return {
        /**
         * Extracts the given entry from the archive and returns the content as a Buffer object
         * @param {ZipEntry|string} entry ZipEntry object or String with the full path of the entry
         * @param {Buffer|string} [pass] - password
         * @return Buffer or Null in case of error
         */
        readFile: function(entry, pass) {
          var item = getEntry(entry);
          return item && item.getData(pass) || null;
        },
        /**
         * Returns how many child elements has on entry (directories) on files it is always 0
         * @param {ZipEntry|string} entry ZipEntry object or String with the full path of the entry
         * @returns {integer}
         */
        childCount: function(entry) {
          const item = getEntry(entry);
          if (item) {
            return _zip.getChildCount(item);
          }
        },
        /**
         * Asynchronous readFile
         * @param {ZipEntry|string} entry ZipEntry object or String with the full path of the entry
         * @param {callback} callback
         *
         * @return Buffer or Null in case of error
         */
        readFileAsync: function(entry, callback) {
          var item = getEntry(entry);
          if (item) {
            item.getDataAsync(callback);
          } else {
            callback(null, "getEntry failed for:" + entry);
          }
        },
        /**
         * Extracts the given entry from the archive and returns the content as plain text in the given encoding
         * @param {ZipEntry|string} entry - ZipEntry object or String with the full path of the entry
         * @param {string} encoding - Optional. If no encoding is specified utf8 is used
         *
         * @return String
         */
        readAsText: function(entry, encoding) {
          var item = getEntry(entry);
          if (item) {
            var data = item.getData();
            if (data && data.length) {
              return data.toString(encoding || "utf8");
            }
          }
          return "";
        },
        /**
         * Asynchronous readAsText
         * @param {ZipEntry|string} entry ZipEntry object or String with the full path of the entry
         * @param {callback} callback
         * @param {string} [encoding] - Optional. If no encoding is specified utf8 is used
         *
         * @return String
         */
        readAsTextAsync: function(entry, callback, encoding) {
          var item = getEntry(entry);
          if (item) {
            item.getDataAsync(function(data, err) {
              if (err) {
                callback(data, err);
                return;
              }
              if (data && data.length) {
                callback(data.toString(encoding || "utf8"));
              } else {
                callback("");
              }
            });
          } else {
            callback("");
          }
        },
        /**
         * Remove the entry from the file or the entry and all it's nested directories and files if the given entry is a directory
         *
         * @param {ZipEntry|string} entry
         * @param {boolean} withsubfolders
         * @returns {void}
         */
        deleteFile: function(entry, withsubfolders = true) {
          var item = getEntry(entry);
          if (item) {
            _zip.deleteFile(item.entryName, withsubfolders);
          }
        },
        /**
         * Remove the entry from the file or directory without affecting any nested entries
         *
         * @param {ZipEntry|string} entry
         * @returns {void}
         */
        deleteEntry: function(entry) {
          var item = getEntry(entry);
          if (item) {
            _zip.deleteEntry(item.entryName);
          }
        },
        /**
         * Adds a comment to the zip. The zip must be rewritten after adding the comment.
         *
         * @param {string} comment
         */
        addZipComment: function(comment) {
          _zip.comment = comment;
        },
        /**
         * Returns the zip comment
         *
         * @return String
         */
        getZipComment: function() {
          return _zip.comment || "";
        },
        /**
         * Adds a comment to a specified zipEntry. The zip must be rewritten after adding the comment
         * The comment cannot exceed 65535 characters in length
         *
         * @param {ZipEntry} entry
         * @param {string} comment
         */
        addZipEntryComment: function(entry, comment) {
          var item = getEntry(entry);
          if (item) {
            item.comment = comment;
          }
        },
        /**
         * Returns the comment of the specified entry
         *
         * @param {ZipEntry} entry
         * @return String
         */
        getZipEntryComment: function(entry) {
          var item = getEntry(entry);
          if (item) {
            return item.comment || "";
          }
          return "";
        },
        /**
         * Updates the content of an existing entry inside the archive. The zip must be rewritten after updating the content
         *
         * @param {ZipEntry} entry
         * @param {Buffer} content
         */
        updateFile: function(entry, content) {
          var item = getEntry(entry);
          if (item) {
            item.setData(content);
          }
        },
        /**
         * Adds a file from the disk to the archive
         *
         * @param {string} localPath File to add to zip
         * @param {string} [zipPath] Optional path inside the zip
         * @param {string} [zipName] Optional name for the file
         * @param {string} [comment] Optional file comment
         */
        addLocalFile: function(localPath, zipPath, zipName, comment) {
          if (filetools.fs.existsSync(localPath)) {
            zipPath = zipPath ? fixPath(zipPath) : "";
            const p = pth.win32.basename(pth.win32.normalize(localPath));
            zipPath += zipName ? zipName : p;
            const _attr = filetools.fs.statSync(localPath);
            const data = _attr.isFile() ? filetools.fs.readFileSync(localPath) : Buffer.alloc(0);
            if (_attr.isDirectory()) zipPath += filetools.sep;
            this.addFile(zipPath, data, comment, _attr);
          } else {
            throw Utils.Errors.FILE_NOT_FOUND(localPath);
          }
        },
        /**
         * Callback for showing if everything was done.
         *
         * @callback doneCallback
         * @param {Error} err - Error object
         * @param {boolean} done - was request fully completed
         */
        /**
         * Adds a file from the disk to the archive
         *
         * @param {(object|string)} options - options object, if it is string it us used as localPath.
         * @param {string} options.localPath - Local path to the file.
         * @param {string} [options.comment] - Optional file comment.
         * @param {string} [options.zipPath] - Optional path inside the zip
         * @param {string} [options.zipName] - Optional name for the file
         * @param {doneCallback} callback - The callback that handles the response.
         */
        addLocalFileAsync: function(options2, callback) {
          options2 = typeof options2 === "object" ? options2 : { localPath: options2 };
          const localPath = pth.resolve(options2.localPath);
          const { comment } = options2;
          let { zipPath, zipName } = options2;
          const self = this;
          filetools.fs.stat(localPath, function(err, stats) {
            if (err) return callback(err, false);
            zipPath = zipPath ? fixPath(zipPath) : "";
            const p = pth.win32.basename(pth.win32.normalize(localPath));
            zipPath += zipName ? zipName : p;
            if (stats.isFile()) {
              filetools.fs.readFile(localPath, function(err2, data) {
                if (err2) return callback(err2, false);
                self.addFile(zipPath, data, comment, stats);
                return setImmediate(callback, void 0, true);
              });
            } else if (stats.isDirectory()) {
              zipPath += filetools.sep;
              self.addFile(zipPath, Buffer.alloc(0), comment, stats);
              return setImmediate(callback, void 0, true);
            }
          });
        },
        /**
         * Adds a local directory and all its nested files and directories to the archive
         *
         * @param {string} localPath - local path to the folder
         * @param {string} [zipPath] - optional path inside zip
         * @param {(RegExp|function)} [filter] - optional RegExp or Function if files match will be included.
         */
        addLocalFolder: function(localPath, zipPath, filter) {
          filter = filenameFilter(filter);
          zipPath = zipPath ? fixPath(zipPath) : "";
          localPath = pth.normalize(localPath);
          if (filetools.fs.existsSync(localPath)) {
            const items = filetools.findFiles(localPath);
            const self = this;
            if (items.length) {
              for (const filepath of items) {
                const p = pth.join(zipPath, relativePath(localPath, filepath));
                if (filter(p)) {
                  self.addLocalFile(filepath, pth.dirname(p));
                }
              }
            }
          } else {
            throw Utils.Errors.FILE_NOT_FOUND(localPath);
          }
        },
        /**
         * Asynchronous addLocalFolder
         * @param {string} localPath
         * @param {callback} callback
         * @param {string} [zipPath] optional path inside zip
         * @param {RegExp|function} [filter] optional RegExp or Function if files match will
         *               be included.
         */
        addLocalFolderAsync: function(localPath, callback, zipPath, filter) {
          filter = filenameFilter(filter);
          zipPath = zipPath ? fixPath(zipPath) : "";
          localPath = pth.normalize(localPath);
          var self = this;
          filetools.fs.open(localPath, "r", function(err) {
            if (err && err.code === "ENOENT") {
              callback(void 0, Utils.Errors.FILE_NOT_FOUND(localPath));
            } else if (err) {
              callback(void 0, err);
            } else {
              var items = filetools.findFiles(localPath);
              var i = -1;
              var next = function() {
                i += 1;
                if (i < items.length) {
                  var filepath = items[i];
                  var p = relativePath(localPath, filepath).split("\\").join("/");
                  p = p.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7E]/g, "");
                  if (filter(p)) {
                    filetools.fs.stat(filepath, function(er0, stats) {
                      if (er0) callback(void 0, er0);
                      if (stats.isFile()) {
                        filetools.fs.readFile(filepath, function(er1, data) {
                          if (er1) {
                            callback(void 0, er1);
                          } else {
                            self.addFile(zipPath + p, data, "", stats);
                            next();
                          }
                        });
                      } else {
                        self.addFile(zipPath + p + "/", Buffer.alloc(0), "", stats);
                        next();
                      }
                    });
                  } else {
                    process.nextTick(() => {
                      next();
                    });
                  }
                } else {
                  callback(true, void 0);
                }
              };
              next();
            }
          });
        },
        /**
         * Adds a local directory and all its nested files and directories to the archive
         *
         * @param {object | string} options - options object, if it is string it us used as localPath.
         * @param {string} options.localPath - Local path to the folder.
         * @param {string} [options.zipPath] - optional path inside zip.
         * @param {RegExp|function} [options.filter] - optional RegExp or Function if files match will be included.
         * @param {function|string} [options.namefix] - optional function to help fix filename
         * @param {doneCallback} callback - The callback that handles the response.
         *
         */
        addLocalFolderAsync2: function(options2, callback) {
          const self = this;
          options2 = typeof options2 === "object" ? options2 : { localPath: options2 };
          const localPath = pth.resolve(options2.localPath);
          let { zipPath, filter, namefix } = options2;
          if (filter instanceof RegExp) {
            filter = /* @__PURE__ */ (function(rx) {
              return function(filename) {
                return rx.test(filename);
              };
            })(filter);
          } else if ("function" !== typeof filter) {
            filter = function() {
              return true;
            };
          }
          zipPath = zipPath ? fixPath(zipPath) : "";
          if (namefix === "latin1") {
            namefix = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7E]/g, "");
          }
          if (typeof namefix !== "function") namefix = (str) => str;
          const relPathFix = (entry) => pth.join(zipPath, namefix(relativePath(localPath, entry)));
          const fileNameFix = (entry) => pth.win32.basename(pth.win32.normalize(namefix(entry)));
          filetools.fs.open(localPath, "r", function(err) {
            if (err && err.code === "ENOENT") {
              callback(Utils.Errors.FILE_NOT_FOUND(localPath), false);
            } else if (err) {
              callback(err, false);
            } else {
              filetools.findFilesAsync(localPath, function(err2, fileEntries) {
                if (err2) return callback(err2, false);
                fileEntries = fileEntries.filter((dir) => filter(relPathFix(dir)));
                if (!fileEntries.length) return callback(void 0, true);
                setImmediate(
                  fileEntries.reverse().reduce(function(next, entry) {
                    return function(err3, done) {
                      if (err3 || done === false) return setImmediate(next, err3, false);
                      self.addLocalFileAsync(
                        {
                          localPath: entry,
                          zipPath: pth.dirname(relPathFix(entry)),
                          zipName: fileNameFix(entry)
                        },
                        next
                      );
                    };
                  }, callback)
                );
              });
            }
          });
        },
        /**
         * Adds a local directory and all its nested files and directories to the archive
         *
         * @param {string} localPath - path where files will be extracted
         * @param {object} props - optional properties
         * @param {string} [props.zipPath] - optional path inside zip
         * @param {RegExp|function} [props.filter] - optional RegExp or Function if files match will be included.
         * @param {function|string} [props.namefix] - optional function to help fix filename
         */
        addLocalFolderPromise: function(localPath, props) {
          return new Promise((resolve, reject) => {
            this.addLocalFolderAsync2(Object.assign({ localPath }, props), (err, done) => {
              if (err) return reject(err);
              if (done) resolve(this);
            });
          });
        },
        /**
         * Allows you to create a entry (file or directory) in the zip file.
         * If you want to create a directory the entryName must end in / and a null buffer should be provided.
         * Comment and attributes are optional
         *
         * @param {string} entryName
         * @param {Buffer | string} content - file content as buffer or utf8 coded string
         * @param {string} [comment] - file comment
         * @param {number | object} [attr] - number as unix file permissions, object as filesystem Stats object
         */
        addFile: function(entryName, content, comment, attr) {
          entryName = zipnamefix(entryName);
          let entry = getEntry(entryName);
          const update = entry != null;
          if (!update) {
            entry = new ZipEntry(opts);
            entry.entryName = entryName;
          }
          entry.comment = comment || "";
          const isStat = "object" === typeof attr && attr instanceof filetools.fs.Stats;
          if (isStat) {
            entry.header.time = attr.mtime;
          }
          var fileattr = entry.isDirectory ? 16 : 0;
          let unix = entry.isDirectory ? 16384 : 32768;
          if (isStat) {
            unix |= 4095 & attr.mode;
          } else if ("number" === typeof attr) {
            unix |= 4095 & attr;
          } else {
            unix |= entry.isDirectory ? 493 : 420;
          }
          fileattr = (fileattr | unix << 16) >>> 0;
          entry.attr = fileattr;
          entry.setData(content);
          if (!update) _zip.setEntry(entry);
          return entry;
        },
        /**
         * Returns an array of ZipEntry objects representing the files and folders inside the archive
         *
         * @param {string} [password]
         * @returns Array
         */
        getEntries: function(password) {
          _zip.password = password;
          return _zip ? _zip.entries : [];
        },
        /**
         * Returns a ZipEntry object representing the file or folder specified by ``name``.
         *
         * @param {string} name
         * @return ZipEntry
         */
        getEntry: function(name) {
          return getEntry(name);
        },
        getEntryCount: function() {
          return _zip.getEntryCount();
        },
        forEach: function(callback) {
          return _zip.forEach(callback);
        },
        /**
         * Extracts the given entry to the given targetPath
         * If the entry is a directory inside the archive, the entire directory and it's subdirectories will be extracted
         *
         * @param {string|ZipEntry} entry - ZipEntry object or String with the full path of the entry
         * @param {string} targetPath - Target folder where to write the file
         * @param {boolean} [maintainEntryPath=true] - If maintainEntryPath is true and the entry is inside a folder, the entry folder will be created in targetPath as well. Default is TRUE
         * @param {boolean} [overwrite=false] - If the file already exists at the target path, the file will be overwriten if this is true.
         * @param {boolean} [keepOriginalPermission=false] - The file will be set as the permission from the entry if this is true.
         * @param {string} [outFileName] - String If set will override the filename of the extracted file (Only works if the entry is a file)
         *
         * @return Boolean
         */
        extractEntryTo: function(entry, targetPath, maintainEntryPath, overwrite, keepOriginalPermission, outFileName) {
          overwrite = get_Bool(false, overwrite);
          keepOriginalPermission = get_Bool(false, keepOriginalPermission);
          maintainEntryPath = get_Bool(true, maintainEntryPath);
          outFileName = get_Str(keepOriginalPermission, outFileName);
          var item = getEntry(entry);
          if (!item) {
            throw Utils.Errors.NO_ENTRY();
          }
          var entryName = canonical(item.entryName);
          var target = sanitize(targetPath, outFileName && !item.isDirectory ? canonical(outFileName) : maintainEntryPath ? entryName : pth.basename(entryName));
          if (item.isDirectory) {
            var children = _zip.getEntryChildren(item);
            children.forEach(function(child) {
              if (child.isDirectory) return;
              var content2 = child.getData();
              if (!content2) {
                throw Utils.Errors.CANT_EXTRACT_FILE();
              }
              var name = canonical(maintainEntryPath ? child.entryName : child.entryName.substring(item.entryName.length));
              var childName = sanitize(targetPath, name);
              filetools.assertPathSafe(targetPath, childName);
              const fileAttr2 = keepOriginalPermission ? child.header.fileAttr : void 0;
              filetools.writeFileTo(childName, content2, overwrite, fileAttr2);
            });
            return true;
          }
          var content = item.getData(_zip.password);
          if (!content) throw Utils.Errors.CANT_EXTRACT_FILE();
          filetools.assertPathSafe(targetPath, target);
          if (filetools.fs.existsSync(target) && !overwrite) {
            throw Utils.Errors.CANT_OVERRIDE();
          }
          const fileAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
          filetools.writeFileTo(target, content, overwrite, fileAttr);
          return true;
        },
        /**
         * Test the archive
         * @param {string} [pass]
         */
        test: function(pass) {
          if (!_zip) {
            return false;
          }
          for (var entry of _zip.entries) {
            try {
              if (entry.isDirectory) {
                continue;
              }
              var content = entry.getData(pass);
              if (!content) {
                return false;
              }
            } catch (err) {
              return false;
            }
          }
          return true;
        },
        /**
         * Extracts the entire archive to the given location
         *
         * @param {string} targetPath Target location
         * @param {boolean} [overwrite=false] If the file already exists at the target path, the file will be overwriten if this is true.
         *                  Default is FALSE
         * @param {boolean} [keepOriginalPermission=false] The file will be set as the permission from the entry if this is true.
         *                  Default is FALSE
         * @param {string|Buffer} [pass] password
         */
        extractAllTo: function(targetPath, overwrite, keepOriginalPermission, pass) {
          keepOriginalPermission = get_Bool(false, keepOriginalPermission);
          pass = get_Str(keepOriginalPermission, pass);
          overwrite = get_Bool(false, overwrite);
          if (!_zip) throw Utils.Errors.NO_ZIP();
          const dirEntries = [];
          _zip.entries.forEach(function(entry) {
            var entryName = sanitize(targetPath, canonical(entry.entryName));
            filetools.assertPathSafe(targetPath, entryName);
            if (entry.isDirectory) {
              filetools.makeDir(entryName);
              if (keepOriginalPermission) dirEntries.push({ path: entryName, attr: entry.header.fileAttr });
              return;
            }
            var content = entry.getData(pass);
            if (!content) {
              throw Utils.Errors.CANT_EXTRACT_FILE();
            }
            const fileAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
            filetools.writeFileTo(entryName, content, overwrite, fileAttr);
            try {
              filetools.fs.utimesSync(entryName, entry.header.time, entry.header.time);
            } catch (err) {
            }
          });
          applyDirAttributes(dirEntries);
        },
        /**
         * Asynchronous extractAllTo
         *
         * @param {string} targetPath Target location
         * @param {boolean} [overwrite=false] If the file already exists at the target path, the file will be overwriten if this is true.
         *                  Default is FALSE
         * @param {boolean} [keepOriginalPermission=false] The file will be set as the permission from the entry if this is true.
         *                  Default is FALSE
         * @param {function} callback The callback will be executed when all entries are extracted successfully or any error is thrown.
         */
        extractAllToAsync: function(targetPath, overwrite, keepOriginalPermission, callback) {
          callback = get_Fun(overwrite, keepOriginalPermission, callback);
          keepOriginalPermission = get_Bool(false, keepOriginalPermission);
          overwrite = get_Bool(false, overwrite);
          if (!callback) {
            return new Promise((resolve, reject) => {
              this.extractAllToAsync(targetPath, overwrite, keepOriginalPermission, function(err) {
                if (err) {
                  reject(err);
                } else {
                  resolve(this);
                }
              });
            });
          }
          if (!_zip) {
            callback(Utils.Errors.NO_ZIP());
            return;
          }
          targetPath = pth.resolve(targetPath);
          const getPath = (entry) => sanitize(targetPath, pth.normalize(canonical(entry.entryName)));
          const getError = (msg, file) => new Error(msg + ': "' + file + '"');
          const dirEntries = [];
          const fileEntries = [];
          _zip.entries.forEach((e) => {
            if (e.isDirectory) {
              dirEntries.push(e);
            } else {
              fileEntries.push(e);
            }
          });
          const deferredDirAttr = [];
          for (const entry of dirEntries) {
            const dirPath = getPath(entry);
            const dirAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
            try {
              filetools.assertPathSafe(targetPath, dirPath);
              filetools.makeDir(dirPath);
            } catch (er) {
              callback(getError("Unable to create folder", dirPath));
              continue;
            }
            if (dirAttr) deferredDirAttr.push({ path: dirPath, attr: dirAttr });
            try {
              filetools.fs.utimesSync(dirPath, entry.header.time, entry.header.time);
            } catch (er) {
            }
          }
          const done = (err) => {
            if (!err) {
              try {
                applyDirAttributes(deferredDirAttr);
              } catch (er) {
                return callback(getError("Unable to set folder permissions", er.path || ""));
              }
            }
            callback(err);
          };
          fileEntries.reverse().reduce(function(next, entry) {
            return function(err) {
              if (err) {
                next(err);
              } else {
                const entryName = pth.normalize(canonical(entry.entryName));
                const filePath = sanitize(targetPath, entryName);
                try {
                  filetools.assertPathSafe(targetPath, filePath);
                } catch (er) {
                  return next(er);
                }
                entry.getDataAsync(function(content, err_1) {
                  if (err_1) {
                    next(err_1);
                  } else if (!content) {
                    next(Utils.Errors.CANT_EXTRACT_FILE());
                  } else {
                    const fileAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
                    filetools.writeFileToAsync(filePath, content, overwrite, fileAttr, function(succ) {
                      if (!succ) {
                        return next(getError("Unable to write file", filePath));
                      }
                      filetools.fs.utimes(filePath, entry.header.time, entry.header.time, function() {
                        next();
                      });
                    });
                  }
                });
              }
            };
          }, done)();
        },
        /**
         * Writes the newly created zip file to disk at the specified location or if a zip was opened and no ``targetFileName`` is provided, it will overwrite the opened zip
         *
         * @param {string} targetFileName
         * @param {function} callback
         */
        writeZip: function(targetFileName, callback) {
          if (arguments.length === 1) {
            if (typeof targetFileName === "function") {
              callback = targetFileName;
              targetFileName = "";
            }
          }
          if (!targetFileName && opts.filename) {
            targetFileName = opts.filename;
          }
          if (!targetFileName) return;
          var zipData = _zip.compressToBuffer();
          if (zipData) {
            var ok = filetools.writeFileTo(targetFileName, zipData, true);
            if (typeof callback === "function") callback(!ok ? new Error("failed") : null, "");
          }
        },
        /**
                 *
                 * @param {string} targetFileName
                 * @param {object} [props]
                 * @param {boolean} [props.overwrite=true] If the file already exists at the target path, the file will be overwriten if this is true.
                 * @param {boolean} [props.perm] The file will be set as the permission from the entry if this is true.
        
                 * @returns {Promise<void>}
                 */
        writeZipPromise: function(targetFileName, props) {
          const { overwrite, perm } = Object.assign({ overwrite: true }, props);
          return new Promise((resolve, reject) => {
            if (!targetFileName && opts.filename) targetFileName = opts.filename;
            if (!targetFileName) reject("ADM-ZIP: ZIP File Name Missing");
            this.toBufferPromise().then((zipData) => {
              const ret = (done) => done ? resolve(done) : reject("ADM-ZIP: Wasn't able to write zip file");
              filetools.writeFileToAsync(targetFileName, zipData, overwrite, perm, ret);
            }, reject);
          });
        },
        /**
         * @returns {Promise<Buffer>} A promise to the Buffer.
         */
        toBufferPromise: function() {
          return new Promise((resolve, reject) => {
            _zip.toAsyncBuffer(resolve, reject);
          });
        },
        /**
         * Returns the content of the entire zip file as a Buffer object
         *
         * @prop {function} [onSuccess]
         * @prop {function} [onFail]
         * @prop {function} [onItemStart]
         * @prop {function} [onItemEnd]
         * @returns {Buffer}
         */
        toBuffer: function(onSuccess, onFail, onItemStart, onItemEnd) {
          if (typeof onSuccess === "function") {
            _zip.toAsyncBuffer(onSuccess, onFail, onItemStart, onItemEnd);
            return null;
          }
          return _zip.compressToBuffer();
        }
      };
    };
  }
});

// src/extensions/minecraft/driver-entry.ts
var driver_entry_exports = {};
__export(driver_entry_exports, {
  createDriver: () => createDriver
});
module.exports = __toCommonJS(driver_entry_exports);

// src/extensions/minecraft/MinecraftDriver.ts
var import_fs5 = __toESM(require("fs"));
var import_path4 = __toESM(require("path"));

// src/extensions/minecraft/ServerInstaller.ts
var import_fs3 = __toESM(require("fs"));
var import_path2 = __toESM(require("path"));

// src/errors.ts
var HTTP_STATUS_BY_CODE = {
  INVALID_LOADER: 400,
  INVALID_VERSION: 400,
  INVALID_PAYLOAD: 400,
  INVALID_FILENAME: 400,
  CONFIG_NOT_FOUND: 404,
  SERVER_RUNNING: 409,
  INSTALL_IN_PROGRESS: 409,
  INSTALL_CANCELLED: 409,
  UPSTREAM_ERROR: 502,
  INVALID_FOLDER: 400,
  BRIDGE_ASSET_MISSING: 500,
  GAME_UNAVAILABLE: 409,
  SETTINGS_CORRUPT: 500,
  SERVER_NOT_ONLINE: 409,
  INTERNAL_ERROR: 500
};
var DaemonError = class extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
    this.name = "DaemonError";
    this.httpStatus = HTTP_STATUS_BY_CODE[code];
  }
  code;
  httpStatus;
};

// src/provisioning/download.ts
var import_crypto = __toESM(require("crypto"));
var import_fs = __toESM(require("fs"));
var import_stream = require("stream");
var import_promises = require("stream/promises");
var DEFAULT_HEADERS = { "User-Agent": "hosty (https://github.com/Morphy137/Hosty)" };
var PARTIAL_SUFFIX = ".part";
async function downloadFile(url, dest, hooks, expected) {
  let response;
  try {
    response = await fetch(url, { headers: DEFAULT_HEADERS, signal: hooks.signal });
  } catch (err) {
    if (hooks.signal?.aborted) throw new DaemonError("INSTALL_CANCELLED", "Installation cancelled.");
    const msg = err instanceof Error ? err.message : String(err);
    throw new DaemonError("UPSTREAM_ERROR", `Failed to reach download server: ${msg}`);
  }
  if (!response.ok || !response.body) {
    throw new DaemonError("UPSTREAM_ERROR", `Failed to download server file (${response.status} ${response.statusText})`);
  }
  const totalHeader = Number(response.headers.get("content-length"));
  const total = Number.isFinite(totalHeader) && totalHeader > 0 ? totalHeader : null;
  let received = 0;
  const hash = expected ? import_crypto.default.createHash(expected.algorithm) : null;
  const source = import_stream.Readable.fromWeb(response.body);
  source.on("data", (chunk) => {
    received += chunk.length;
    hash?.update(chunk);
    hooks.onBytes?.(received, total);
  });
  const partial = `${dest}${PARTIAL_SUFFIX}`;
  try {
    await (0, import_promises.pipeline)(source, import_fs.default.createWriteStream(partial));
  } catch (err) {
    import_fs.default.rmSync(partial, { force: true });
    if (hooks.signal?.aborted) throw new DaemonError("INSTALL_CANCELLED", "Installation cancelled.");
    throw err;
  }
  if (hash && expected && hash.digest("hex") !== expected.hex.toLowerCase()) {
    import_fs.default.rmSync(partial, { force: true });
    throw new DaemonError("UPSTREAM_ERROR", "The downloaded file is corrupt (checksum mismatch). Try again.");
  }
  import_fs.default.renameSync(partial, dest);
}

// src/extensions/minecraft/PropertiesParser.ts
var import_fs2 = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var PROPERTIES_FILE_NAME = "server.properties";
var CRLF = "\r\n";
var LF = "\n";
var parseLine = (line) => {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#") || trimmed.startsWith("!")) return null;
  const separatorIndex = trimmed.indexOf("=");
  if (separatorIndex === -1) return null;
  return {
    key: trimmed.slice(0, separatorIndex).trim(),
    rawValue: trimmed.slice(separatorIndex + 1).trim()
  };
};
var toPropertyItem = ({ key, rawValue }) => {
  if (rawValue === "true" || rawValue === "false") {
    return { key, value: rawValue === "true", type: "boolean" };
  }
  if (rawValue !== "" && !isNaN(Number(rawValue))) {
    return { key, value: Number(rawValue), type: "number" };
  }
  return { key, value: rawValue, type: "string" };
};
var detectLineEnding = (content) => content.includes(CRLF) ? CRLF : LF;
var PropertiesParser = class {
  static parseFile(workingDir) {
    const filePath = import_path.default.join(workingDir, PROPERTIES_FILE_NAME);
    if (!import_fs2.default.existsSync(filePath)) {
      this.createDefaultProperties(filePath);
    }
    const content = import_fs2.default.readFileSync(filePath, "utf-8");
    return content.split(/\r?\n/).map(parseLine).filter((parsed) => parsed !== null).map(toPropertyItem);
  }
  /**
   * Applies updates in place, preserving comments, ordering and the original line endings.
   * Keys that do not exist yet are appended at the end of the file.
   */
  static saveFile(workingDir, updates) {
    const filePath = import_path.default.join(workingDir, PROPERTIES_FILE_NAME);
    if (!import_fs2.default.existsSync(filePath)) {
      this.createDefaultProperties(filePath);
    }
    this.updateFile(filePath, updates);
  }
  /** Reads `key=value` pairs of any properties-format file; a missing file yields an empty map. */
  static readValues(filePath) {
    if (!import_fs2.default.existsSync(filePath)) return {};
    const values = {};
    for (const line of import_fs2.default.readFileSync(filePath, "utf-8").split(/\r?\n/)) {
      const parsed = parseLine(line);
      if (parsed) values[parsed.key] = parsed.rawValue.trim();
    }
    return values;
  }
  /** Same in-place update as `saveFile`, for an explicit path (creates a minimal file when missing). */
  static updateFile(filePath, updates) {
    if (!import_fs2.default.existsSync(filePath)) {
      import_fs2.default.mkdirSync(import_path.default.dirname(filePath), { recursive: true });
      import_fs2.default.writeFileSync(filePath, "", "utf-8");
    }
    const content = import_fs2.default.readFileSync(filePath, "utf-8");
    const lineEnding = detectLineEnding(content);
    const remainingKeys = new Set(Object.keys(updates));
    const updatedLines = content.split(/\r?\n/).map((line) => {
      const parsed = parseLine(line);
      if (!parsed || !Object.hasOwn(updates, parsed.key)) return line;
      remainingKeys.delete(parsed.key);
      return `${parsed.key}=${updates[parsed.key]}`;
    });
    const hadTrailingNewline = updatedLines.length > 0 && updatedLines[updatedLines.length - 1] === "";
    if (hadTrailingNewline) updatedLines.pop();
    for (const key of remainingKeys) {
      updatedLines.push(`${key}=${updates[key]}`);
    }
    import_fs2.default.writeFileSync(filePath, updatedLines.join(lineEnding) + lineEnding, "utf-8");
  }
  static createDefaultProperties(filePath, options) {
    import_fs2.default.mkdirSync(import_path.default.dirname(filePath), { recursive: true });
    const port = options?.port ?? 25565;
    const motd = options?.motd ?? "MC-Nexus Local Server";
    const maxPlayers = options?.maxPlayers ?? 20;
    const defaults = [
      "# Minecraft server properties",
      "accepts-transfers=false",
      "allow-flight=false",
      "allow-nether=true",
      "broadcast-console-to-ops=true",
      "broadcast-rcon-to-ops=true",
      "bug-report-link=",
      "difficulty=normal",
      "enable-command-block=false",
      "enable-jmx-monitoring=false",
      "enable-query=false",
      "enable-rcon=false",
      "enable-status=true",
      "enforce-secure-profile=true",
      "enforce-whitelist=false",
      "entity-broadcast-range-percentage=100",
      "force-gamemode=false",
      "function-permission-level=2",
      "gamemode=survival",
      "generate-structures=true",
      "generator-settings={}",
      "hardcore=false",
      "hide-online-players=false",
      "initial-disabled-packs=",
      "initial-enabled-packs=vanilla",
      "level-name=world",
      "level-seed=",
      "level-type=minecraft\\:normal",
      "log-ips=true",
      "max-chained-neighbor-updates=1000000",
      `max-players=${maxPlayers}`,
      "max-tick-time=60000",
      "max-world-size=29999984",
      `motd=${motd}`,
      "network-compression-threshold=256",
      "online-mode=true",
      "op-permission-level=4",
      "player-idle-timeout=0",
      "prevent-proxy-connections=false",
      "pvp=true",
      `query.port=${port}`,
      "rate-limit=0",
      "rcon.password=",
      "rcon.port=25575",
      "region-file-compression=deflate",
      "require-resource-pack=false",
      "resource-pack=",
      "resource-pack-id=",
      "resource-pack-prompt=",
      "resource-pack-sha1=",
      "server-ip=",
      `server-port=${port}`,
      "simulation-distance=10",
      "spawn-animals=true",
      "spawn-monsters=true",
      "spawn-npcs=true",
      "spawn-protection=16",
      "sync-chunk-writes=true",
      "text-filtering-config=",
      "use-native-transport=true",
      "view-distance=10",
      "white-list=false"
    ].join(LF);
    import_fs2.default.writeFileSync(filePath, defaults + LF, "utf-8");
  }
};

// src/extensions/minecraft/JavaInstallerRunner.ts
var import_child_process = require("child_process");
function runServerInstaller(options) {
  const { javaPath, installerJar, cwd, signal, onLine } = options;
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new DaemonError("INSTALL_CANCELLED", "Installation cancelled."));
      return;
    }
    const child = (0, import_child_process.spawn)(javaPath || "java", ["-jar", installerJar, "--installServer"], {
      cwd,
      stdio: ["ignore", "pipe", "pipe"]
    });
    const pipeLines = (stream) => {
      let pending = "";
      stream.on("data", (chunk) => {
        pending += chunk.toString("utf-8");
        const lines = pending.split(/\r?\n/);
        pending = lines.pop() ?? "";
        for (const line of lines) {
          if (line.trim()) onLine(line);
        }
      });
      stream.on("end", () => {
        if (pending.trim()) onLine(pending);
      });
    };
    pipeLines(child.stdout);
    pipeLines(child.stderr);
    const onAbort = () => {
      child.kill("SIGKILL");
      reject(new DaemonError("INSTALL_CANCELLED", "Installation cancelled."));
    };
    signal?.addEventListener("abort", onAbort, { once: true });
    child.on("error", (error) => {
      signal?.removeEventListener("abort", onAbort);
      reject(
        new DaemonError(
          "INTERNAL_ERROR",
          `Could not run Java for the installer (${error.message}). Make sure Java is installed.`
        )
      );
    });
    child.on("close", (code) => {
      signal?.removeEventListener("abort", onAbort);
      if (signal?.aborted) return;
      if (code === 0) {
        resolve();
      } else {
        reject(new DaemonError("INTERNAL_ERROR", `The server installer exited with code ${code}.`));
      }
    });
  });
}

// src/extensions/minecraft/ModLoaderCatalog.ts
var FORGE_METADATA_URL = "https://maven.minecraftforge.net/net/minecraftforge/forge/maven-metadata.xml";
var NEOFORGE_METADATA_URL = "https://maven.neoforged.net/releases/net/neoforged/neoforge/maven-metadata.xml";
var MIN_FORGE_MC_VERSION = "1.12.2";
var parseMavenVersions = (xml) => {
  const block = /<versions>([\s\S]*?)<\/versions>/.exec(xml)?.[1] ?? "";
  const versions = [];
  const pattern = /<version>\s*([^<\s]+)\s*<\/version>/g;
  for (let match = pattern.exec(block); match; match = pattern.exec(block)) {
    versions.push(match[1]);
  }
  return versions;
};
var compareVersions = (a, b) => {
  const pa = a.split(/[.-]/).map((part) => Number.parseInt(part, 10) || 0);
  const pb = b.split(/[.-]/).map((part) => Number.parseInt(part, 10) || 0);
  const length = Math.max(pa.length, pb.length);
  for (let i = 0; i < length; i += 1) {
    const diff = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
};
var sortNewestFirst = (versions) => [...new Set(versions)].sort((a, b) => compareVersions(b, a));
var forgeMinecraftVersions = (mavenVersions) => sortNewestFirst(
  mavenVersions.map((version) => version.split("-")[0]).filter((mc) => /^(1|\d{2})\.\d+(\.\d+)?$/.test(mc) && compareVersions(mc, MIN_FORGE_MC_VERSION) >= 0)
);
var latestForgeVersion = (mavenVersions, mcVersion) => {
  const matches = mavenVersions.filter((version) => version.startsWith(`${mcVersion}-`));
  return matches.length > 0 ? matches[matches.length - 1] : null;
};
var forgeBuilds = (mavenVersions, mcVersion) => mavenVersions.filter((version) => version.startsWith(`${mcVersion}-`)).map((version) => version.slice(mcVersion.length + 1)).reverse();
var neoForgeBuilds = (mavenVersions, mcVersion) => {
  const matches = mavenVersions.filter((version) => neoForgeToMinecraftVersion(version) === mcVersion).sort((a, b) => compareVersions(b, a));
  const isPreRelease = (version) => /-(alpha|beta|rc)/i.test(version);
  return [...matches.filter((version) => !isPreRelease(version)), ...matches.filter(isPreRelease)];
};
var forgeInstallerUrl = (forgeVersion) => `https://maven.minecraftforge.net/net/minecraftforge/forge/${forgeVersion}/forge-${forgeVersion}-installer.jar`;
var neoForgeToMinecraftVersion = (neoForgeVersion) => {
  const parts = neoForgeVersion.split(/[.-]/).slice(0, 4).map((part) => Number.parseInt(part, 10));
  if (parts.length < 3 || parts.slice(0, 3).some((part) => Number.isNaN(part))) return null;
  const [major, minor, patch] = parts;
  if (major < 20) return null;
  if (major >= 26) return patch > 0 ? `${major}.${minor}.${patch}` : `${major}.${minor}`;
  return minor > 0 ? `1.${major}.${minor}` : `1.${major}`;
};
var neoForgeMinecraftVersions = (mavenVersions) => sortNewestFirst(
  mavenVersions.map((version) => neoForgeToMinecraftVersion(version)).filter((mc) => mc !== null)
);
var latestNeoForgeVersion = (mavenVersions, mcVersion) => {
  const matches = mavenVersions.filter((version) => neoForgeToMinecraftVersion(version) === mcVersion);
  const stable = matches.filter((version) => !/-(alpha|beta|rc)/i.test(version));
  const pool = stable.length > 0 ? stable : matches;
  return pool.length > 0 ? pool.slice().sort(compareVersions)[pool.length - 1] : null;
};
var neoForgeInstallerUrl = (neoForgeVersion) => `https://maven.neoforged.net/releases/net/neoforged/neoforge/${neoForgeVersion}/neoforge-${neoForgeVersion}-installer.jar`;

// src/extensions/minecraft/ServerInstaller.ts
var VALID_LOADERS = [
  "paper",
  "purpur",
  "fabric",
  "vanilla",
  "forge",
  "neoforge",
  "spigot"
];
var AUTOMATIC_LOADERS = ["paper", "purpur", "fabric", "vanilla", "forge", "neoforge"];
var USER_AGENT = "mc-nexus/1.0.0 (contact@mc-nexus.local)";
var DEFAULT_HEADERS2 = { "User-Agent": USER_AGENT };
var DEFAULT_MINECRAFT_VERSIONS = [
  "1.21.4",
  "1.21.3",
  "1.21.1",
  "1.21",
  "1.20.6",
  "1.20.4",
  "1.20.2",
  "1.20.1",
  "1.19.4",
  "1.19.2",
  "1.18.2",
  "1.16.5"
];
var BUILD_PATTERN = /^[0-9a-zA-Z._+-]+$/;
var sha256Of = (hex) => hex ? { algorithm: "sha256", hex } : void 0;
var ServerInstaller = class {
  static isValidLoader(value) {
    return typeof value === "string" && VALID_LOADERS.includes(value);
  }
  static async getVersions(loader) {
    if (!this.isValidLoader(loader)) {
      throw new DaemonError("INVALID_LOADER", `Invalid loader: "${loader}". Expected one of: ${VALID_LOADERS.join(", ")}`);
    }
    if (!AUTOMATIC_LOADERS.includes(loader)) {
      return [];
    }
    try {
      if (loader === "forge") {
        return forgeMinecraftVersions(await this.fetchMavenVersions(FORGE_METADATA_URL));
      }
      if (loader === "neoforge") {
        return neoForgeMinecraftVersions(await this.fetchMavenVersions(NEOFORGE_METADATA_URL));
      }
      if (loader === "paper") {
        return await this.getPaperVersions();
      }
      if (loader === "purpur") {
        return await this.getPurpurVersions();
      }
      if (loader === "fabric") {
        return await this.getFabricVersions();
      }
      return await this.getVanillaVersions();
    } catch {
      return [...DEFAULT_MINECRAFT_VERSIONS];
    }
  }
  /**
   * Builds of a loader for one Minecraft version, newest first (what the user may pick instead of "latest").
   * Empty for loaders without separate builds (vanilla) or when the upstream cannot be reached.
   */
  static async getBuilds(loader, mcVersion) {
    if (!this.isValidLoader(loader) || !AUTOMATIC_LOADERS.includes(loader)) return [];
    if (!BUILD_PATTERN.test(mcVersion)) return [];
    try {
      if (loader === "forge") return forgeBuilds(await this.fetchMavenVersions(FORGE_METADATA_URL), mcVersion);
      if (loader === "neoforge") return neoForgeBuilds(await this.fetchMavenVersions(NEOFORGE_METADATA_URL), mcVersion);
      if (loader === "paper") {
        const res = await fetch(`https://fill.papermc.io/v3/projects/paper/versions/${mcVersion}/builds`, { headers: DEFAULT_HEADERS2 });
        if (!res.ok) return [];
        const builds = await res.json();
        const ids = builds.map((build) => build.id).sort((a, b) => b - a);
        return ids.map(String);
      }
      if (loader === "purpur") {
        const res = await fetch(`https://api.purpurmc.org/v2/purpur/${mcVersion}`, { headers: DEFAULT_HEADERS2 });
        if (!res.ok) return [];
        const data = await res.json();
        return (data.builds?.all ?? []).slice().sort((a, b) => Number(b) - Number(a));
      }
      if (loader === "fabric") {
        const res = await fetch(`https://meta.fabricmc.net/v2/versions/loader/${mcVersion}`, { headers: DEFAULT_HEADERS2 });
        if (!res.ok) return [];
        const data = await res.json();
        const versions = data.map((entry) => entry.loader);
        return [...versions.filter((entry) => entry.stable), ...versions.filter((entry) => !entry.stable)].map((entry) => entry.version);
      }
    } catch {
      return [];
    }
    return [];
  }
  static async provisionServer(workingDir, loader, mcVersion, hooks, build) {
    if (!this.isValidLoader(loader)) {
      throw new DaemonError("INVALID_LOADER", `Invalid loader: "${loader}".`);
    }
    if (!AUTOMATIC_LOADERS.includes(loader)) {
      throw new DaemonError(
        "INVALID_LOADER",
        `Loader "${loader}" requires a manual server jar attachment/upload.`
      );
    }
    if (!mcVersion || typeof mcVersion !== "string" || !/^[0-9a-zA-Z._-]+$/.test(mcVersion)) {
      throw new DaemonError("INVALID_VERSION", `Invalid Minecraft version: "${mcVersion}".`);
    }
    const { onLog, onPhase, signal } = hooks;
    import_fs3.default.mkdirSync(workingDir, { recursive: true });
    import_fs3.default.mkdirSync(import_path2.default.join(workingDir, "mods"), { recursive: true });
    import_fs3.default.mkdirSync(import_path2.default.join(workingDir, "config"), { recursive: true });
    onPhase?.("resolve");
    onLog(`[Provisioner] Resolving ${loader.toUpperCase()} build for Minecraft ${mcVersion}...`);
    if (build && !BUILD_PATTERN.test(build)) throw new DaemonError("INVALID_VERSION", `Invalid build: "${build}".`);
    const download = await this.resolveDownload(loader, mcVersion, build || void 0);
    const isInstallerLoader = loader === "forge" || loader === "neoforge";
    const downloadTarget = import_path2.default.join(workingDir, isInstallerLoader ? "installer.jar" : "server.jar");
    onPhase?.("download");
    onLog(`[Provisioner] Downloading ${isInstallerLoader ? "installer" : "server binary"}...`);
    await downloadFile(download.url, downloadTarget, hooks, download.checksum);
    if (isInstallerLoader) {
      onPhase?.("install");
      onLog("[Provisioner] Running the official installer (this can take a few minutes)...");
      try {
        await runServerInstaller({
          javaPath: hooks.javaPath || "java",
          installerJar: downloadTarget,
          cwd: workingDir,
          signal,
          onLine: (line) => onLog(`[Installer] ${line}`)
        });
      } finally {
        import_fs3.default.rmSync(downloadTarget, { force: true });
        import_fs3.default.rmSync(import_path2.default.join(workingDir, "installer.jar.log"), { force: true });
      }
    }
    onPhase?.("configure");
    import_fs3.default.writeFileSync(import_path2.default.join(workingDir, "eula.txt"), "eula=true\n", "utf-8");
    const propsPath = import_path2.default.join(workingDir, "server.properties");
    if (!import_fs3.default.existsSync(propsPath)) {
      PropertiesParser.createDefaultProperties(propsPath);
    }
    onLog("[Provisioner] Server installed & eula.txt signed automatically.");
  }
  static async fetchMavenVersions(url) {
    const res = await fetch(url, { headers: DEFAULT_HEADERS2 });
    if (!res.ok) {
      throw new DaemonError("UPSTREAM_ERROR", `Maven metadata responded with status ${res.status}`);
    }
    return parseMavenVersions(await res.text());
  }
  static async getPaperVersions() {
    try {
      const res = await fetch("https://fill.papermc.io/v3/projects/paper", { headers: DEFAULT_HEADERS2 });
      if (res.ok) {
        const data = await res.json();
        if (data.versions) {
          const allVersions = Object.values(data.versions).flat();
          const stableVersions = allVersions.filter((v) => !v.includes("-rc") && !v.includes("-pre"));
          return [...new Set(stableVersions.length > 0 ? stableVersions : allVersions)].sort((a, b) => compareVersions(b, a));
        }
      }
    } catch {
    }
    return [...DEFAULT_MINECRAFT_VERSIONS];
  }
  static async getPurpurVersions() {
    const res = await fetch("https://api.purpurmc.org/v2/purpur", { headers: DEFAULT_HEADERS2 });
    if (!res.ok) {
      throw new DaemonError("UPSTREAM_ERROR", `Purpur API responded with status ${res.status}`);
    }
    const data = await res.json();
    return data.versions.slice().sort((a, b) => compareVersions(b, a));
  }
  static async getFabricVersions() {
    const res = await fetch("https://meta.fabricmc.net/v2/versions/game", { headers: DEFAULT_HEADERS2 });
    if (!res.ok) {
      throw new DaemonError("UPSTREAM_ERROR", `Fabric meta API responded with status ${res.status}`);
    }
    const data = await res.json();
    return data.filter((v) => v.stable).map((v) => v.version);
  }
  static async getVanillaVersions() {
    const res = await fetch("https://piston-meta.mojang.com/mc/game/version_manifest_v2.json", {
      headers: DEFAULT_HEADERS2
    });
    if (!res.ok) {
      throw new DaemonError("UPSTREAM_ERROR", `Mojang manifest API responded with status ${res.status}`);
    }
    const data = await res.json();
    return data.versions.filter((v) => v.type === "release").map((v) => v.id);
  }
  /** Download URL of the server (or installer) and, when the source publishes one, its checksum. */
  static async resolveDownload(loader, mcVersion, build) {
    if (loader === "forge") {
      const all = await this.fetchMavenVersions(FORGE_METADATA_URL);
      const version = build ? all.includes(`${mcVersion}-${build}`) ? `${mcVersion}-${build}` : null : latestForgeVersion(all, mcVersion);
      if (!version) throw new DaemonError("INVALID_VERSION", `No Forge build found for Minecraft ${mcVersion}`);
      return { url: forgeInstallerUrl(version) };
    }
    if (loader === "neoforge") {
      const all = await this.fetchMavenVersions(NEOFORGE_METADATA_URL);
      const version = build ? neoForgeBuilds(all, mcVersion).includes(build) ? build : null : latestNeoForgeVersion(all, mcVersion);
      if (!version) throw new DaemonError("INVALID_VERSION", `No NeoForge build found for Minecraft ${mcVersion}`);
      return { url: neoForgeInstallerUrl(version) };
    }
    if (loader === "paper") {
      try {
        const res = await fetch(`https://fill.papermc.io/v3/projects/paper/versions/${mcVersion}/builds/${build ?? "latest"}`, {
          headers: DEFAULT_HEADERS2
        });
        if (res.ok) {
          const data = await res.json();
          const server2 = data.downloads?.["server:default"];
          if (server2?.url) {
            return { url: server2.url, checksum: sha256Of(server2.checksums?.sha256) };
          }
        }
      } catch {
      }
      if (build) throw new DaemonError("INVALID_VERSION", `Paper build ${build} was not found for Minecraft ${mcVersion}`);
      const v2Res = await fetch(`https://api.papermc.io/v2/projects/paper/versions/${mcVersion}/builds`, {
        headers: DEFAULT_HEADERS2
      });
      if (!v2Res.ok) {
        throw new DaemonError("UPSTREAM_ERROR", `No Paper builds found for Minecraft ${mcVersion}`);
      }
      const v2Data = await v2Res.json();
      if (!v2Data.builds || v2Data.builds.length === 0) {
        throw new DaemonError("UPSTREAM_ERROR", `No Paper builds found for Minecraft ${mcVersion}`);
      }
      const latest = v2Data.builds[v2Data.builds.length - 1];
      const fileName = latest.downloads.application.name;
      return {
        url: `https://api.papermc.io/v2/projects/paper/versions/${mcVersion}/builds/${latest.build}/downloads/${fileName}`,
        checksum: sha256Of(latest.downloads.application.sha256)
      };
    }
    if (loader === "purpur") {
      return { url: `https://api.purpurmc.org/v2/purpur/${mcVersion}/${build ?? "latest"}/download` };
    }
    if (loader === "fabric") {
      const loaderRes = await fetch("https://meta.fabricmc.net/v2/versions/loader", { headers: DEFAULT_HEADERS2 });
      if (!loaderRes.ok) throw new DaemonError("UPSTREAM_ERROR", "Failed to fetch Fabric loader metadata");
      const loaders = await loaderRes.json();
      const installerRes = await fetch("https://meta.fabricmc.net/v2/versions/installer", { headers: DEFAULT_HEADERS2 });
      if (!installerRes.ok) throw new DaemonError("UPSTREAM_ERROR", "Failed to fetch Fabric installer metadata");
      const installers = await installerRes.json();
      const loaderVersion = build ?? loaders[0]?.version;
      if (!loaderVersion || !installers[0]) {
        throw new DaemonError("UPSTREAM_ERROR", "Fabric loader or installer version not found");
      }
      return {
        url: `https://meta.fabricmc.net/v2/versions/loader/${mcVersion}/${loaderVersion}/${installers[0].version}/server/jar`
      };
    }
    const manifestRes = await fetch("https://piston-meta.mojang.com/mc/game/version_manifest_v2.json", {
      headers: DEFAULT_HEADERS2
    });
    if (!manifestRes.ok) throw new DaemonError("UPSTREAM_ERROR", "Failed to fetch Mojang version manifest");
    const manifest = await manifestRes.json();
    const target = manifest.versions.find((v) => v.id === mcVersion);
    if (!target) throw new DaemonError("INVALID_VERSION", `Minecraft version ${mcVersion} not found in official manifest`);
    const versionRes = await fetch(target.url, { headers: DEFAULT_HEADERS2 });
    if (!versionRes.ok) throw new DaemonError("UPSTREAM_ERROR", "Failed to fetch Mojang version details");
    const versionData = await versionRes.json();
    const server = versionData.downloads.server;
    return { url: server.url, checksum: server.sha1 ? { algorithm: "sha1", hex: server.sha1 } : void 0 };
  }
};

// src/core/gamepacks/DeclarativeDriver.ts
var import_fs4 = __toESM(require("fs"));
var import_path3 = __toESM(require("path"));
var DEFAULT_MIN_RAM_MB = 1024;
var DEFAULT_MAX_RAM_MB = 4096;
var JAVA_RUNTIME_FLAGS = ["-XX:+UseG1GC"];
function expandGlob(baseDir, pattern) {
  const segments = pattern.split(/[\\/]/).filter(Boolean);
  const toRegex = (segment) => new RegExp(`^${segment.split("*").map((part) => part.replace(/[.+?^${}()|[\]\\]/g, "\\$&")).join("[^/]*")}$`, "i");
  const walk = (dir, index, prefix) => {
    if (index >= segments.length) return [prefix.join("/")];
    const segment = segments[index];
    const last = index === segments.length - 1;
    if (!segment.includes("*")) {
      const next = import_path3.default.join(dir, segment);
      if (!import_fs4.default.existsSync(next)) return [];
      if (last) return import_fs4.default.statSync(next).isFile() ? [[...prefix, segment].join("/")] : [];
      return import_fs4.default.statSync(next).isDirectory() ? walk(next, index + 1, [...prefix, segment]) : [];
    }
    if (!import_fs4.default.existsSync(dir) || !import_fs4.default.statSync(dir).isDirectory()) return [];
    const matcher = toRegex(segment);
    const results = [];
    for (const entry of import_fs4.default.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      if (!matcher.test(entry.name)) continue;
      if (last) {
        if (entry.isFile()) results.push([...prefix, entry.name].join("/"));
      } else if (entry.isDirectory()) {
        results.push(...walk(import_path3.default.join(dir, entry.name), index + 1, [...prefix, entry.name]));
      }
    }
    return results;
  };
  return walk(baseDir, 0, []);
}
function newestFile(baseDir, candidates) {
  let newest;
  for (const file of candidates) {
    const mtimeMs = import_fs4.default.statSync(import_path3.default.join(baseDir, file)).mtimeMs;
    if (!newest || mtimeMs >= newest.mtimeMs) newest = { file, mtimeMs };
  }
  return newest?.file;
}
var toList = (value) => value === void 0 ? [] : typeof value === "string" ? [value] : value;
var compile = (patterns) => toList(patterns).map((pattern) => new RegExp(pattern, "i"));
var toLanguageMap = (text) => text === void 0 ? void 0 : typeof text === "string" ? { en: text } : text;
var firstText = (text) => {
  const map = toLanguageMap(text);
  return map ? map.en ?? Object.values(map)[0] ?? "" : "";
};
function resolvePlatformValue(value, platform = process.platform) {
  if (typeof value === "string") return value;
  const key = platform === "win32" || platform === "linux" || platform === "darwin" ? platform : "default";
  return value[key] ?? value.default ?? Object.values(value)[0] ?? "";
}
function renderTemplate(template, variables) {
  return template.replace(/\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g, (_match, key) => String(variables[key] ?? ""));
}
var DeclarativeGameDriver = class {
  constructor(manifest, packDir) {
    this.manifest = manifest;
    this.packDir = packDir;
    this.id = manifest.id;
    this.name = manifest.name;
    this.ready = compile(manifest.logs?.ready);
    this.join = compile(manifest.logs?.join);
    this.leave = compile(manifest.logs?.leave);
    this.queries = (manifest.playerQueries ?? []).map((query) => ({
      id: query.id,
      command: query.command,
      pattern: new RegExp(query.pattern, "i"),
      fields: query.fields
    }));
    const capabilities = {
      players: manifest.capabilities?.players ?? true,
      mods: manifest.capabilities?.mods ?? false,
      configEditor: manifest.capabilities?.configEditor ?? (manifest.configFiles?.length ?? 0) > 0,
      bridge: manifest.capabilities?.bridge ?? false
    };
    const setupSchema = (manifest.setup ?? []).map((field) => ({
      id: field.id,
      type: field.type,
      label: field.label,
      labelKey: field.labelKey,
      component: field.component,
      description: field.description,
      options: field.options?.map((option) => ({ value: option.value, label: option.label })),
      default: field.default,
      required: field.required
    }));
    this.summary = {
      id: manifest.id,
      name: manifest.name,
      category: manifest.category ?? "sandbox",
      defaultPort: manifest.defaults.port,
      portStride: manifest.defaults.portStride,
      defaultMaxPlayers: manifest.defaults.maxPlayers,
      executableName: resolvePlatformValue(manifest.launch.executable),
      launchArgs: manifest.launch.args ?? [],
      supportsMods: capabilities.mods,
      modFormat: manifest.modFormat ?? "",
      supportsCustomJava: manifest.launch.runtime === "java",
      configFileName: manifest.configFiles?.[0]?.path ?? "",
      badge: manifest.badge ?? manifest.id.slice(0, 2).toUpperCase(),
      description: firstText(manifest.description),
      descriptionI18n: toLanguageMap(manifest.description),
      status: manifest.status ?? "available",
      setupSchema,
      capabilities,
      configFiles: (manifest.configFiles ?? []).map((file) => ({ ...file })),
      launchDefaults: manifest.defaults.memoryMb ? { memoryMb: manifest.defaults.memoryMb } : void 0,
      configSync: manifest.configSync,
      playerActions: manifest.playerActions,
      creationSettings: manifest.creationSettings,
      instanceFolders: manifest.instanceFolders,
      modLayout: manifest.modLayout,
      bridgeTargets: manifest.bridgeTargets,
      quickCommands: manifest.quickCommands,
      playerLists: manifest.playerLists,
      playerView: manifest.playerView,
      dimensions: manifest.dimensions,
      performance: manifest.performance,
      installer: manifest.installer,
      motd: manifest.motd,
      listPlayersCommand: manifest.commands?.listPlayers,
      bridgeLoaders: manifest.bridgeLoaders,
      jvmFlagPresets: manifest.jvmFlagPresets,
      modSources: manifest.modSources,
      serverIcon: manifest.serverIcon ? { ...manifest.serverIcon } : void 0,
      hasLogo: Boolean(manifest.logo && packDir && import_fs4.default.existsSync(import_path3.default.join(packDir, manifest.logo))),
      i18n: manifest.i18n,
      provision: manifest.provision
    };
  }
  manifest;
  packDir;
  id;
  name;
  summary;
  ready;
  join;
  leave;
  queries;
  executableCandidates() {
    const value = this.manifest.launch.executable;
    const resolved = resolvePlatformValue(value);
    return resolved.split("|").map((entry) => entry.trim()).filter(Boolean);
  }
  /**
   * First `launch.discover` entry (for this platform and, when known, the installed variant) that matches a file in
   * the instance. Among several matches of one entry (e.g. two installed loader versions) the most recently
   * written file wins: it belongs to the last installation.
   */
  discoverLaunch(cwd, variant) {
    const wanted = variant?.toLowerCase();
    for (const entry of this.manifest.launch.discover ?? []) {
      if (entry.platform && entry.platform !== process.platform) continue;
      if (wanted && entry.variants && !entry.variants.some((candidate) => candidate.toLowerCase() === wanted)) continue;
      const exclude = entry.exclude ? new RegExp(entry.exclude, "i") : null;
      const matches = expandGlob(cwd, entry.glob).filter((candidate) => !exclude || !exclude.test(import_path3.default.basename(candidate)));
      const match = newestFile(cwd, matches);
      if (match) return { entry, match };
    }
    return null;
  }
  validateInstallation(instanceDir, launchFile) {
    if (launchFile && this.manifest.launch.runtime === "java" && /\.jar$/i.test(launchFile)) {
      if (import_fs4.default.existsSync(import_path3.default.join(instanceDir, launchFile))) return true;
    }
    const markers = [...this.manifest.detect ?? [], ...this.executableCandidates()];
    if (markers.some((marker) => import_fs4.default.existsSync(import_path3.default.join(instanceDir, marker)))) return true;
    return this.discoverLaunch(import_path3.default.resolve(instanceDir)) !== null;
  }
  buildLaunchPlan(config) {
    const cwd = import_path3.default.resolve(config.workingDir);
    const minRam = config.minRamMb ?? DEFAULT_MIN_RAM_MB;
    const maxRam = config.maxRamMb ?? DEFAULT_MAX_RAM_MB;
    const candidates = this.executableCandidates();
    const executable = candidates.find((candidate) => import_fs4.default.existsSync(import_path3.default.join(cwd, candidate))) ?? candidates[0] ?? "";
    const discovered = this.discoverLaunch(cwd, config.loader);
    const variables = {
      ...config.gameConfig,
      id: config.id,
      name: config.name,
      port: config.port ?? this.manifest.defaults.port,
      /** The port after `port`, for games that listen on a second one. */
      nextPort: (config.port ?? this.manifest.defaults.port) + 1,
      maxPlayers: config.maxPlayers ?? this.manifest.defaults.maxPlayers,
      minRamMb: minRam,
      maxRamMb: maxRam,
      ramMb: maxRam,
      /** Absolute server folder, for games that keep data elsewhere unless told (e.g. a cache dir flag). */
      instanceDir: cwd,
      match: discovered?.match
    };
    const renderArgs = (args) => args.flatMap((item) => {
      if (typeof item === "string") return [renderTemplate(item, variables)];
      return import_fs4.default.existsSync(import_path3.default.join(cwd, item.ifExists)) ? [renderTemplate(item.arg, variables)] : [];
    });
    const extraArgs = renderArgs(this.manifest.launch.args ?? []);
    if (this.manifest.launch.runtime === "java") {
      const custom = (config.jvmArgs ?? []).filter((flag, index, all) => all.indexOf(flag) === index);
      const choosesCollector = custom.some((flag) => /^-XX:\+Use\w+GC$/.test(flag));
      const base = [`-Xms${minRam}M`, `-Xmx${maxRam}M`, ...choosesCollector ? [] : JAVA_RUNTIME_FLAGS, ...custom];
      if (discovered) {
        const rendered = renderArgs(discovered.entry.args ?? []);
        const tail = discovered.entry.mode === "jar" ? ["-jar", discovered.match, ...rendered] : rendered;
        return { executable: config.javaPath || "java", args: [...base, ...tail], cwd };
      }
      return {
        executable: config.javaPath || "java",
        args: [...base, "-jar", config.jarFile || executable, ...extraArgs],
        cwd
      };
    }
    if (discovered) {
      return {
        executable: import_path3.default.join(cwd, discovered.match),
        args: renderArgs(discovered.entry.args ?? []),
        cwd
      };
    }
    return { executable: import_path3.default.join(cwd, executable), args: extraArgs, cwd };
  }
  consumeQueryResponse(line, pendingQueries) {
    for (const query of this.queries) {
      const match = query.pattern.exec(line);
      const username = match?.groups?.username;
      if (!match || !username || !pendingQueries.delete(`${username}:${query.id}`)) continue;
      const patch = {};
      for (const [field, kind] of Object.entries(query.fields)) {
        const raw = match.groups?.[field];
        if (raw === void 0) continue;
        patch[field] = kind === "number" ? Math.round(parseFloat(raw)) : raw;
      }
      return { username, patch };
    }
    return null;
  }
  pollPlayerPositions(stdin, players, pendingQueries) {
    if (this.queries.length === 0) return;
    pendingQueries.clear();
    for (const player of players) {
      for (const query of this.queries) {
        pendingQueries.add(`${player}:${query.id}`);
        stdin.write(`${renderTemplate(query.command, { player })}
`);
      }
    }
  }
  buildStopCommand() {
    const command = this.manifest.commands?.stop ?? "stop";
    return command.toLowerCase() === "ctrl+c" ? "" : `${command}
`;
  }
  buildSaveCommand() {
    const command = this.manifest.commands?.save;
    return command === null ? "" : `${command ?? "save"}
`;
  }
  buildBroadcastCommand(message) {
    const template = this.manifest.commands?.broadcast;
    if (!template) return null;
    const clean = message.replace(/[\r\n]+/g, " ").trim();
    return `${template.replace(/\{\{\s*message\s*\}\}/g, clean)}
`;
  }
  backupPaths() {
    return this.manifest.backup?.paths;
  }
  parseLogLine(line) {
    if (this.ready.some((pattern) => pattern.test(line))) return { isReady: true };
    for (const pattern of this.join) {
      const match = pattern.exec(line);
      const username = match?.groups?.username ?? match?.[1];
      if (username) {
        return { playerJoin: { username, dimension: this.manifest.logs?.dimension ?? "", x: 0, y: 0, z: 0 } };
      }
    }
    for (const pattern of this.leave) {
      const match = pattern.exec(line);
      const username = match?.groups?.username ?? match?.[1];
      if (username) return { playerLeave: username };
    }
    return null;
  }
};

// src/extensions/minecraft/JarInspector.ts
var import_adm_zip = __toESM(require_adm_zip());
var UNKNOWN = { loader: null, mcVersion: null, loaderVersion: null, kind: "unknown" };
var MC_VERSION_PATTERN = /\b(?:1\.\d{1,2}|\d{2}\.\d{1,2})(?:\.\d{1,2})?\b/;
var hasPrefix = (names, prefix) => {
  for (const name of names) {
    if (name.startsWith(prefix)) return true;
  }
  return false;
};
var parseJson = (text) => {
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
};
function classifyJar(entries) {
  const { names, readText } = entries;
  if (names.has("install_profile.json")) {
    const profile = parseJson(
      readText("install_profile.json")
    );
    const mcVersion = profile?.minecraft ?? profile?.install?.minecraft ?? null;
    const version = profile?.version ?? null;
    if (hasPrefix(names, "net/neoforged/")) {
      const match = version ? /neoforge-(.+)$/.exec(version) : null;
      return { loader: "neoforge", mcVersion, loaderVersion: match ? match[1] : version, kind: "installer" };
    }
    if (hasPrefix(names, "net/minecraftforge/")) {
      const match = version ? /forge-(.+)$/.exec(version) : null;
      return { loader: "forge", mcVersion, loaderVersion: match ? match[1] : version, kind: "installer" };
    }
  }
  if (hasPrefix(names, "io/papermc/paperclip/") || names.has("META-INF/versions.list") && names.has("META-INF/download-context")) {
    const context = `${readText("META-INF/versions.list") ?? ""}
${readText("META-INF/download-context") ?? ""}`;
    const loader = /purpur/i.test(context) ? "purpur" : "paper";
    const mcVersion = MC_VERSION_PATTERN.exec(context)?.[0] ?? null;
    return { loader, mcVersion, loaderVersion: null, kind: "server" };
  }
  if (names.has("fabric-server-launch.properties") || names.has("fabric-server-launcher.properties") || hasPrefix(names, "net/fabricmc/")) {
    return { loader: "fabric", mcVersion: null, loaderVersion: null, kind: "server" };
  }
  if (hasPrefix(names, "org/bukkit/craftbukkit/") || hasPrefix(names, "org/spigotmc/")) {
    const pom = readText("META-INF/maven/org.spigotmc/spigot/pom.properties");
    const mcVersion = pom ? MC_VERSION_PATTERN.exec(pom)?.[0] ?? null : null;
    return { loader: "spigot", mcVersion, loaderVersion: null, kind: "server" };
  }
  if (names.has("version.json") && (hasPrefix(names, "net/minecraft/server/") || hasPrefix(names, "net/minecraft/bundler/"))) {
    const version = parseJson(readText("version.json"));
    return { loader: "vanilla", mcVersion: version?.id ?? null, loaderVersion: null, kind: "server" };
  }
  return { ...UNKNOWN };
}
function inspectJar(filePath) {
  try {
    const zip = new import_adm_zip.default(filePath);
    const zipEntries = zip.getEntries();
    const names = new Set(zipEntries.map((entry) => entry.entryName));
    return classifyJar({
      names,
      readText: (name) => {
        const entry = zip.getEntry(name);
        if (!entry || entry.header.size > 2 * 1024 * 1024) return null;
        return entry.getData().toString("utf-8");
      }
    });
  } catch {
    return { ...UNKNOWN };
  }
}

// src/extensions/minecraft/LogLineParser.ts
var DEFAULT_DIMENSION = "overworld";
var USERNAME_PATTERN = "[a-zA-Z0-9_]{3,16}";
var NUMBER_PATTERN = "-?\\d+(?:\\.\\d+)?(?:E-?\\d+)?";
var SERVER_READY_REGEX = /Done \([\d.,]+s\)! For help, type "help"/;
var JOIN_REGEX = new RegExp(
  `:\\s(${USERNAME_PATTERN})\\[[^\\]]*\\] logged in with entity id \\d+ at \\((?:\\[([^\\]]+)\\])?\\s*(${NUMBER_PATTERN}),\\s*(${NUMBER_PATTERN}),\\s*(${NUMBER_PATTERN})\\)`
);
var LEAVE_REGEX = new RegExp(`:\\s(${USERNAME_PATTERN}) left the game`);
var POSITION_RESPONSE_REGEX = new RegExp(
  `:\\s(${USERNAME_PATTERN}) has the following entity data: \\[(${NUMBER_PATTERN})d, (${NUMBER_PATTERN})d, (${NUMBER_PATTERN})d\\]`
);
var DIMENSION_RESPONSE_REGEX = new RegExp(
  `:\\s(${USERNAME_PATTERN}) has the following entity data: "(?:[a-z0-9_.-]+:)?([a-z0-9_./-]+)"`
);
var WORLD_NAME_TO_DIMENSION = {
  world: "overworld",
  world_nether: "the_nether",
  world_the_end: "the_end"
};
var toBlockCoordinate = (raw) => Math.round(parseFloat(raw));
var normalizeDimension = (raw) => {
  if (!raw) return DEFAULT_DIMENSION;
  const withoutNamespace = raw.includes(":") ? raw.slice(raw.indexOf(":") + 1) : raw;
  return WORLD_NAME_TO_DIMENSION[withoutNamespace] ?? withoutNamespace;
};
var isServerReadyLine = (line) => SERVER_READY_REGEX.test(line);
var parsePlayerJoin = (line) => {
  const match = line.match(JOIN_REGEX);
  if (!match) return null;
  const [, username, world, x, y, z] = match;
  return {
    username,
    dimension: normalizeDimension(world),
    x: toBlockCoordinate(x),
    y: toBlockCoordinate(y),
    z: toBlockCoordinate(z)
  };
};
var parsePlayerLeave = (line) => line.match(LEAVE_REGEX)?.[1] ?? null;

// src/extensions/minecraft/MinecraftDriver.ts
var ARGS_FILE_LOADER_DIRS = [
  ["libraries", "net", "neoforged", "neoforge"],
  ["libraries", "net", "minecraftforge", "forge"]
];
function resolveMinecraftLaunchTarget(instanceDir, preferredJar = "server.jar") {
  const argsName = process.platform === "win32" ? "win_args.txt" : "unix_args.txt";
  for (const segments of ARGS_FILE_LOADER_DIRS) {
    const base = import_path4.default.join(instanceDir, ...segments);
    if (!import_fs5.default.existsSync(base)) continue;
    const versions = import_fs5.default.readdirSync(base, { withFileTypes: true }).filter((entry) => entry.isDirectory());
    for (const version of versions) {
      if (import_fs5.default.existsSync(import_path4.default.join(base, version.name, argsName))) {
        return { mode: "argsFile", target: [...segments, version.name, argsName].join("/") };
      }
    }
  }
  if (import_fs5.default.existsSync(import_path4.default.join(instanceDir, preferredJar))) {
    return { mode: "jar", target: preferredJar };
  }
  const legacy = import_fs5.default.readdirSync(instanceDir).find((name) => /^forge-.+\.jar$/i.test(name) && !/installer/i.test(name));
  return legacy ? { mode: "jar", target: legacy } : null;
}
var MinecraftDriver = class extends DeclarativeGameDriver {
  constructor(manifest, packDir) {
    super(manifest, packDir);
  }
  /** Paper / Purpur / Fabric / Vanilla / Forge / NeoForge downloads and uploaded jars (variants: manifest `installer`). */
  installer = {
    listVersions: (variant) => ServerInstaller.getVersions(variant),
    listBuilds: (variant, version) => ServerInstaller.getBuilds(variant, version),
    install: (instanceDir, variant, version, hooks, build) => ServerInstaller.provisionServer(instanceDir, variant, version, hooks, build),
    inspectFile: (filePath) => {
      const inspection = inspectJar(filePath);
      return {
        variant: inspection.loader,
        gameVersion: inspection.mcVersion,
        variantVersion: inspection.loaderVersion,
        kind: inspection.kind
      };
    },
    placeFile: (instanceDir, filePath, info) => {
      const destination = import_path4.default.join(instanceDir, info.kind === "installer" ? "installer.jar" : "server.jar");
      import_fs5.default.copyFileSync(filePath, destination);
      if (info.kind !== "installer") return { launchFile: "server.jar" };
      return {
        run: async (hooks) => {
          hooks.onPhase?.("install");
          hooks.onLog("[Provisioner] Running the uploaded installer (this can take a few minutes)...");
          try {
            await runServerInstaller({
              javaPath: hooks.javaPath || "java",
              installerJar: destination,
              cwd: instanceDir,
              signal: hooks.signal,
              onLine: (line) => hooks.onLog(`[Installer] ${line}`)
            });
          } finally {
            import_fs5.default.rmSync(destination, { force: true });
            import_fs5.default.rmSync(import_path4.default.join(instanceDir, "installer.jar.log"), { force: true });
          }
          hooks.onPhase?.("configure");
        }
      };
    }
  };
  parseLogLine(line) {
    if (isServerReadyLine(line)) {
      return { isReady: true };
    }
    const joined = parsePlayerJoin(line);
    if (joined) {
      return { playerJoin: joined };
    }
    const simpleJoinMatch = line.match(/:\s([a-zA-Z0-9_]{3,16})\s+joined the game/i);
    if (simpleJoinMatch && simpleJoinMatch[1]) {
      return {
        playerJoin: { username: simpleJoinMatch[1], dimension: "overworld", x: 0, y: 64, z: 0 }
      };
    }
    const leftUsername = parsePlayerLeave(line);
    if (leftUsername) {
      return { playerLeave: leftUsername };
    }
    return null;
  }
  consumeQueryResponse(line, pendingQueries) {
    const result = super.consumeQueryResponse(line, pendingQueries);
    if (result && typeof result.patch.dimension === "string") {
      result.patch.dimension = normalizeDimension(result.patch.dimension);
    }
    return result;
  }
  scaffoldInstance(instanceDir, options) {
    const propsPath = import_path4.default.join(instanceDir, "server.properties");
    if (!import_fs5.default.existsSync(propsPath)) PropertiesParser.createDefaultProperties(propsPath, options);
    const eulaPath = import_path4.default.join(instanceDir, "eula.txt");
    if (!import_fs5.default.existsSync(eulaPath)) import_fs5.default.writeFileSync(eulaPath, "eula=true\n", "utf-8");
  }
  inspectFolder(instanceDir, launchFile) {
    const chosen = launchFile && import_fs5.default.existsSync(import_path4.default.join(instanceDir, launchFile)) ? launchFile : void 0;
    const launch = chosen ? { mode: "jar", target: chosen } : resolveMinecraftLaunchTarget(instanceDir);
    if (launch?.mode === "argsFile") {
      const versionDir = launch.target.split("/").slice(-2, -1)[0] ?? "";
      return {
        variant: launch.target.includes("/neoforged/") ? "neoforge" : "forge",
        version: versionDir.split("-")[0] || null
      };
    }
    if (launch?.mode === "jar") {
      const inspection = inspectJar(import_path4.default.join(instanceDir, launch.target));
      return { variant: inspection.loader, version: inspection.mcVersion };
    }
    return {};
  }
};

// src/extensions/minecraft/driver-entry.ts
function createDriver(context) {
  return new MinecraftDriver(context.manifest, context.packDir);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createDriver
});
