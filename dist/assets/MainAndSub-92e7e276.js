const I="data:text/plain;base64,cGFja2FnZSBNYWluQW5kU3ViOwoKaW1wb3J0IGphdmEuaW8uKjsKaW1wb3J0IGphdmEudXRpbC4qOwoKcHVibGljIGNsYXNzIE1haW5BbmRTdWIgewogICAgcHJpdmF0ZSBBcnJheUxpc3Q8U3RyaW5nPiBrd2ljTGlzdCA9IG5ldyBBcnJheUxpc3Q8U3RyaW5nPigpOwogICAgcHJpdmF0ZSBBcnJheUxpc3Q8U3RyaW5nPiBsaW5lVHh0ID0gbmV3IEFycmF5TGlzdDxTdHJpbmc+KCk7CiAgICBwcml2YXRlIEJ1ZmZlcmVkUmVhZGVyIGlucHV0RmlsZTsKICAgIHByaXZhdGUgQnVmZmVyZWRXcml0ZXIgb3V0cHV0RmlsZTsKICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBtYWluKFN0cmluZ1tdIGFyZ3MpIHsKICAgICAgICBNYWluQW5kU3ViIGt3aWMgPSBuZXcgTWFpbkFuZFN1YigpOwogICAgICAgIGt3aWMuaW5wdXQoIkU6XFzova/ku7bmnrbmnoTlrp7pqoxcXHRleHQudHh0Iik7CiAgICAgICAga3dpYy5zaGlmdCgpOwogICAgICAgIGt3aWMuYWxwaGFiZXRpemVyKCk7CiAgICAgICAga3dpYy5vdXRwdXQoIkU6XFzova/ku7bmnrbmnoTlrp7pqoxcXHRleHQudHh0Iik7CiAgICB9CgogICAgcHVibGljIHZvaWQgaW5wdXQoU3RyaW5nIGZpbGVOYW1lKSB7CiAgICAgICAgdHJ5IHsKICAgICAgICAgICAgaW5wdXRGaWxlID0gbmV3IEJ1ZmZlcmVkUmVhZGVyKG5ldyBGaWxlUmVhZGVyKGZpbGVOYW1lKSk7CiAgICAgICAgfSBjYXRjaCAoRXhjZXB0aW9uIGUpIHsKICAgICAgICAgICAgZS5wcmludFN0YWNrVHJhY2UoKTsKICAgICAgICB9CiAgICAgICAgU3RyaW5nIGxpbmU7CiAgICAgICAgdHJ5IHsKICAgICAgICAgICAgd2hpbGUgKChsaW5lID0gaW5wdXRGaWxlLnJlYWRMaW5lKCkpICE9IG51bGwpIHsKICAgICAgICAgICAgICAgIGxpbmVUeHQuYWRkKGxpbmUpOwogICAgICAgICAgICB9CiAgICAgICAgfSBjYXRjaCAoSU9FeGNlcHRpb24gZSkgewogICAgICAgICAgICBlLnByaW50U3RhY2tUcmFjZSgpOwogICAgICAgIH0KICAgIH0KCiAgICBwdWJsaWMgdm9pZCBvdXRwdXQoU3RyaW5nIGZpbGVuYW1lKXsKICAgICAgICBJdGVyYXRvcjxTdHJpbmc+IGl0ID0ga3dpY0xpc3QuaXRlcmF0b3IoKTsKICAgICAgICB0cnkgewogICAgICAgICAgICBvdXRwdXRGaWxlID0gbmV3IEJ1ZmZlcmVkV3JpdGVyKG5ldyBGaWxlV3JpdGVyKGZpbGVuYW1lKSk7CiAgICAgICAgICAgIHdoaWxlIChpdC5oYXNOZXh0KCkpIHsKICAgICAgICAgICAgICAgIG91dHB1dEZpbGUud3JpdGUoaXQubmV4dCgpKyJcbiIpOwogICAgICAgICAgICB9CiAgICAgICAgfWNhdGNoIChJT0V4Y2VwdGlvbiBlKXsKICAgICAgICAgICAgZS5wcmludFN0YWNrVHJhY2UoKTsKICAgICAgICB9ZmluYWxseSB7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgICBpZiAob3V0cHV0RmlsZSE9bnVsbCkgewogICAgICAgICAgICAgICAgICAgIG91dHB1dEZpbGUuY2xvc2UoKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfSBjYXRjaCAoSU9FeGNlcHRpb24gZSkgewogICAgICAgICAgICAgICAgZS5wcmludFN0YWNrVHJhY2UoKTsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgIH0KCiAgICBwdWJsaWMgdm9pZCBzaGlmdCgpIHsKICAgICAgICAvL+iOt+WPluavj+S4quWNleivje+8jOWtmOWFpXRva2VucwogICAgICAgIEl0ZXJhdG9yPFN0cmluZz4gaXQgPSBsaW5lVHh0Lml0ZXJhdG9yKCk7CiAgICAgICAgd2hpbGUgKGl0Lmhhc05leHQoKSkgewogICAgICAgICAgICBTdHJpbmdUb2tlbml6ZXIgdG9rZW4gPSBuZXcgU3RyaW5nVG9rZW5pemVyKGl0Lm5leHQoKSk7CiAgICAgICAgICAgIEFycmF5TGlzdDxTdHJpbmc+IHRva2VucyA9IG5ldyBBcnJheUxpc3Q8U3RyaW5nPigpOwogICAgICAgICAgICBpbnQgaSA9IDA7CiAgICAgICAgICAgIC8v5b6q546v5re75Yqg5Y2V6K+NCiAgICAgICAgICAgIGludCBjb3VudCA9IHRva2VuLmNvdW50VG9rZW5zKCk7CiAgICAgICAgICAgIHdoaWxlIChpIDwgY291bnQpIHsKICAgICAgICAgICAgICAgIHRva2Vucy5hZGQodG9rZW4ubmV4dFRva2VuKCkpOwogICAgICAgICAgICAgICAgaSsrOwogICAgICAgICAgICB9CgogICAgICAgICAgICAvL2Rpc3BsYXkodG9rZW5zKTsKICAgICAgICAgICAgLy/liIflibLlkITkuKrljZXor43vvIzkuI3mlq3mlLnlj5jotbflp4vlgLzlkozliKnnlKhsb29w5a6e546w5L2N56e744CCCiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7CiAgICAgICAgICAgICAgICBTdHJpbmdCdWZmZXIgbGluZUJ1ZmZlciA9IG5ldyBTdHJpbmdCdWZmZXIoKTsKICAgICAgICAgICAgICAgIGludCBpbmRleCA9IGk7CiAgICAgICAgICAgICAgICBmb3IgKGludCBmID0gMDsgZiA8IGNvdW50OyBmKyspIHsKICAgICAgICAgICAgICAgICAgICAvL+S7juWktOe7p+e7reS9jeenuwogICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSBjb3VudCkKICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAwOwogICAgICAgICAgICAgICAgICAgIC8v5a2Y5YWlU3RyaW5nQnVmZmVyCiAgICAgICAgICAgICAgICAgICAgbGluZUJ1ZmZlci5hcHBlbmQodG9rZW5zLmdldChpbmRleCkpOwogICAgICAgICAgICAgICAgICAgIGxpbmVCdWZmZXIuYXBwZW5kKCIgIik7CiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKzsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIFN0cmluZyB0bXAgPSBsaW5lQnVmZmVyLnRvU3RyaW5nKCk7CiAgICAgICAgICAgICAgICBrd2ljTGlzdC5hZGQodG1wKTsKICAgICAgICAgICAgfQogICAgICAgIH0KCiAgICB9CgoKICAgIHB1YmxpYyB2b2lkIGFscGhhYmV0aXplcigpIHsKICAgICAgICBDb2xsZWN0aW9ucy5zb3J0KHRoaXMua3dpY0xpc3QsIG5ldyBBbHBoYWJldGl6ZXJDb21wYXJhdG9yKCkpOwogICAgfQoKICAgIHByaXZhdGUgY2xhc3MgQWxwaGFiZXRpemVyQ29tcGFyYXRvciBpbXBsZW1lbnRzIENvbXBhcmF0b3I8U3RyaW5nPiB7CiAgICAgICAgQE92ZXJyaWRlCiAgICAgICAgcHVibGljIGludCBjb21wYXJlKFN0cmluZyBvMSwgU3RyaW5nIG8yKSB7CiAgICAgICAgICAgIGlmIChvMSA9PSBudWxsICYmIG8yID09IG51bGwpIHsKICAgICAgICAgICAgICAgIHRocm93IG5ldyBOdWxsUG9pbnRlckV4Y2VwdGlvbigpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGludCBjb21wYXJlVmFsdWUgPSAwOwogICAgICAgICAgICBjaGFyIG8xYyA9IG8xLnRvTG93ZXJDYXNlKCkuY2hhckF0KDApOyAvL+W/veeVpeWkp+Wwj+WGmQogICAgICAgICAgICBjaGFyIG8yYyA9IG8yLnRvTG93ZXJDYXNlKCkuY2hhckF0KDApOyAvL+W/veeVpeWkp+Wwj+WGmQogICAgICAgICAgICBjb21wYXJlVmFsdWUgPSBvMWMgLSBvMmM7CiAgICAgICAgICAgIHJldHVybiBjb21wYXJlVmFsdWU7CgogICAgICAgIH0KCiAgICB9Cn0K";export{I as default};
