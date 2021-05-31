import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  announcements: Array<any>;
  constructor() {}

  ngOnInit(): void {
    this.announcements = [
      {
        title: 'Bike fixa/single speed',
        userFirstName: 'Michael',
        userLastName: 'Jordan',
        price: 2500,
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        imgPath:
          'https://www.institutoeleven.com.br/fotos/curso-de-instalador-hidraulico-encanador-Empreendedorismo-e-Meio-Ambiente.jpg',
      },
      {
        title: 'Why do we use it?',
        userFirstName: 'Michael',
        userLastName: 'Jordan',
        price: 2500,
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        imgPath:
          'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRUVGBgYGBgYGBgYGhgaGBQSGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHjQhJSU0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAD8QAAIBAgQDBgMGBQMCBwAAAAECAAMRBBIhMQVBUQYTImFxgTKRoUJSscHR8BRicoLhJJLxI7IHFTNDc6LC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDAgQF/8QAJREAAgICAgMAAgIDAAAAAAAAAAECERIhAzEEQVEiYTKBE0KR/9oADAMBAAIRAxEAPwDKATqjWdWcmvLjlAhwupFtdoxxHUjpE4mfDlcKDnVSBuJWQoZdxCyiZXlQcbN9wTHd7TBJ8a+F/Xkff9YTEwHBeId1UDE+BvC/9PX23+c3wM4ZRpnSnZIBHRqx4EyMaBqPlJgJE4kymJ9jFHRATpEQDbR1ogIoCOmMaOnCIAMhHDbQeZfwu03ETLIkGNaym0mWQYtSQYuX+JThX5HMClkHnrLAE5SWygeU7KxVRSJzdybFaK86Y2aMDarhQWOwBPymcq8U10ELcZe1PKN3IHtufwHzg3C8PB3mJSp0ikYWrZFTx5J+GE6LhhHpw4R38GRtBSfsbh8KmJwqmDKuHIhetTI3lZjfQwaT2jO0CHpwLxNioM1L04E4vh7gzFGosyn/AJiesUqVsL4j6xQKWFVnSJxY+enyxuDR5kHUiSiY+pIqRkj7TzvDljNxOrnVxTK9QSlUWXmleos9GatHNB0yrebHspxHOndMfEg8P81P/G3paY51kuBxTU3V13U39RzB8iNJxzjZ1RZ6aslBlXCYhXRXQ+FhceXUHzB0lpJzmx1p2jtboYhEujeo+oiYE1pyKOiAUVp2KAHJwiOtFaAEREu4TaVGEt4Tabj2JlpRJnpaGR0xrL9EXuOoiluSRXj1FsHCIxOLEjpOXlyBy86IxngzivHEoKSSC9vCnNjyv0HnE5JDUW+inxvGjvcg+wLf3Nqfpl+UkwmKExZx5ZizG5Ykk9STcy7h8fOZyd2daj+NG7pYoSYVhMnhsWTL6Vz1jzFgHHysJRq4WV1qt1lqlWJ3jUzMuMoYhCBtAHE6mhm3FIMIG4vwYODYTfZNxaPOqjamKE63BnDEW2MUeKFbLj8NB2kD8KblLS1WEsUcXMLyZpVZaXjQe6AjYFwdrxr0yNwZqUqg7iRVFQ8pKE8Z5BLhuOKMkxjDNgvDqbjYQdjuzxGqfKelHyYy10ccvFlDfZm6qSoRrCmJw7LowIgyqNYSFE0PZniwpko58DG4P3H6+h/fObdLEXBBB2I2I8jPK6TQlhMa6fA7L5A6fI6SEo3tFE/p6MBOsNL9NZjsN2pqL8ao4/2n6afSGcL2movo2ZD/ADC4+Yk3Fo1r0HRO2lfC4pHHgdWt0IMtASY6ZyK07aKAjkURigA1hLOF2ldpwYkKJpOgqy8uIAcA89PeE6bagzGYriRQ5gtyNr6CafAYgOiuPtAGKKeVso2saRFxvGpSbxsFuLi/P0mbxfadR8ClvM6D9Y7/AMRqelGp/Uh99R+EyFJGb4QTL1eyV10TcV7Q120D5B0XQ/PeAe9JuSSSdyTcn1MNtwCq/K0t4bsiftsZOTiisMjMCoYa4bhXbUggTTYPszTXWwhVOHqosBJy30WTrsCU6OUSamphb+CkiYS0nix5Iq0Vlumoju6tHKs0kJsnpCSNpIEa0tIQRKRJyKlTDKSTbeKWe6nZrYrR5wmJHMSxSCkyhljka05TqsOJQFtJ04a8H4fFkS7Sx0Yis9Qo2sI4bHdZHXCVBbnKf8E67aiA+wliaCVFsQJlOJdnHFymo6QwlYrvcS7T4hYdZuPLKJOXFGR56UKmzAgjkZPTM2eJwdLEaWAb6zOcS4S9E66r1/WdMORSOWfFKJRM6hjWiQypIt0zY6G3pNLwuo9h4m+ZmXQ7TTcKOgmZLQ02H6Tkgi5va49t/peIVT1jKbWIP7tznWWxI6GQo3ZneJdoa1N6yqU8DIFBH2WVSb666mFOC8TerRzvkv8Ay36c5ke0YH8RXFxcrTNv7V/SaDsev+nHqbegAg4o0npnaXFKj0EckAuWBsOg0tDVIeBDzZASepuw/KZrAL/pkHR2H0M0tE/9Kl/R/wDppqlRmwVxRxYw12MxWaiVO6MR7bj8YE4gktdjXKu68iAfcQ9Auw92nwYqUBf7Lg/l+cEYTCqg2mnxgvTcehgF2sJKbZ0cUVR1q9oOqcQ8VrylxPH5djKGGrZnvJNs6FA1eGxN4Qp1BzMA0b20kyZrxqdGXx2aFEB5x/dwZQrkS0uLlFJMlKDXRLUSQKJHWxwE7hcSrHWDkrBRdE4SSolpI1O+06om0ibYrxTtopoR5ulVTvE9BW2Moo4k6POWjqTLI4c1rgyFqLruD7TqYwjSWsHijmFzcecB0VqdYiX6OPI3lrE8NWoMyaNAWIpujWYWMBpWFKuPVtCvvEuBJUsm3SDKTE6GaHhlbKLTNm8aWgbhKdmvqDD/APCrVTK4vpH4nAK65k0aU8Niips2hEeTixOOSMlx/gzUGuNUOx6eUDJPUMQyV0KNbUTz7i/C3oPYi6n4T+RnZxcqlo4ebhcd+ivTmm4VsJmaM1HCxoJWXRzrsMiSvyPUfUaSISTXIbKWK62G5B0PkOW8gUMrxvhqPWqM4NxSQizML2J3sddoc4CgXDUgOQcfJv8AMBcexp7wmkt89IJ4yBd8zXK2urLqLEMb67TUdnMDkoL/ABLodCyrSJZrub6n4R6TO7KVpmcpOEw7FiAFrMLn+4Qzg8QWoUiUZBkIUta7jMdcoN1352MEphkKu4ucld8mb7N3YZiu2a2l+WttzLVTFf8ASpJ91Tf1LE/pKxVkpOrLVa1p3hFQK4blt7SgjF9BrCOHwpXeR5pbxXo6eHi1cvZoq2MUowvuJm+I4sKDJMRiAg3mS4rj8x0MxuRaMVBFDiGLLMYU4AMxv0gLPNZ2Uw/gzEbmE44xNx5FLSNLhqBIlpcNFhzaXU1mYxTMylRSdLCDKdUuxtteXeMVsq2G7aD3jMBhwoAg1uhJ6tkgwtxrFRwuU6QnSQGSdzNqNk3KiGk5ElasJXx1UIt/l5mVcHmOrc/pNZVoxV7L3fxRuSKPYaPK6uFYaob+UhpY6xytoYYw5Ei4lwtKi3GjdZFP6dGN9FbOG2Mu4V7TPmlVpfELjqJew2PBjcRp0anCY2x3hSrTSutmsDyPnMjRxEIYfG25zDTRRKyPG4V6LeIXXkw294/DYodYTo4sOMrWI84M4jwdlJejqu5XmPSZ0za/YawfELc5JiSlTbRplsNjuR0I5dJewuK1id9DUd2XgrU28XseRl+siYhCj220jExSOMri4lqhhUHiXUfhHBtO0KaTX5IwWM4c9Gpkbb7J6iHMAQFuf2JpeIcOSqlufI8wYHo8NsCD5id8ZZRPK5ePCX6ZVq1CRTqEtkclhkfKQqkW1HNtfkZY4bxt1rO3crUVspCNcKjnNdkvcLsL+vLQTlDgyKzMABnYkhbgG5vouwPWw1hAUgNhEoW9ic0lS2Z3itTvq7VKoGdspRVLOq5QQFXkoHQ8yYRGPIUKii2viJ0AubWA3lzE0AVa3Qn3tKWDwgamrHmCfqZpRV0xZPG12U8H8FT/AOUn5uf1kvDcKlQkObBQPfeNoJlFZejr/wBwP5ypRxVmKpdmJsQAb3F5KbcVcey3DBTnUujSph6SaraUcbxEC9jB+KzjKrMis2yEsWAva5yggXOgudZnuKYrK2VXV+uUg2PQ2JF/eQUZy7R6F8MenZb4jxK9wDAFZyd4Uw2F0uTcmdqYMGdvFw4q2eV5Hk5PGPQGw1Iu6op1Y2nqHDqKoiovIWmZ7O8MAcueWg9TvNMmE1vczl8mdyxXo6vFhUMn7CAe37tJu+yreVQdNeUGY/EkWQHVjaTToo1ZIj95Uzn4V0XzPMwpTqetvL9IHRCtrXFukv0HVt7g9Rof0MSexSQWwz32Mvlxa5gWkxWxGuvpOcfxuVFQGzObei/aMspUiTjbohqV+8fNuq6L5+cu4ep5QdhtFGW1hpLFGprrMJ7s01qgrYRSINOypI8yR5Ia52giljestUa6k7xS4pR7RWHNCXTCyVFIsw0g/F8KV9U8JjmbpLOGxN9Ocmk1tHRSkgG6VKZ8QNust4fFX5w3ja6lCpsfzMxGNxmRvD1jjcnVGZy/xU30zXYepbWGMFjNbFrTHcO4qrixNj0MKJWI15c5mUKey0ZxktBviXAhU8dIjNz84DQujZHBB/H0hjA4/LzsPxkHajHo1LMbArqDzmXXRRJ/0SYbEgHXWaPAYlCPuzz7CY4MAQbwxh8faFYg0pGwrplGdD6+krWMq4PFlhlBl1EM6OHqzz/KTTUWLLOd3JcpnUU9JazkxIWp6fSVMBTtTUdBb5EiGTh2CqxVlU7EkG56gDYesH4Kmcg9X/72mW3Y4xVAEN46/qv5QdhuHC7s4VgzXUEBsrA3U2Ol9fpONjSuLq0iujhyG/mQk2PsDI6dcWZG++2U/dYudfW0WwurK3aag6YWzVGY50BC/wDTpkE6E0kstxYC9idJSXg6NYUqneIhYK4UoGub3ynUWOntLmIxXeYinh6rU3ptdnGq2dGsASx19Oc0OOelQRgmQMoGVFy3zN8PhHLn6RuzcdICYBMj2ALkaW0IFt7306wjWwwZiwUKCb5RsvkPKR9nsOWDuddco9d2/EQq1Lyhk1uzDjl6JeE4WygQz3cqYXw2k9Ssek4VLKTZ6VYxUV6G4kWUmZrDNnrseSD6n/H4w1xHEWQwV2do2Qu27sW/t2X6AH3m2YjpNhunSlpMPeNR5ew4BmoolJkYp2HSZnE1u+xJsbrTUJ5Fzq35D2hftPxUYekzfaIyqPvOdFHzgXsxgyiZm1ZiWYnmzamaktBH6F0wpHwm34SRKbb8/LnLdKWe70hGNicqKPekcp2TtVHlFNV+zH9His6qnlLdKjL9DAM2ymenKa9nmKL9FKjUf1ltHO+0K4fgjnlaEaHZ7rOSb4/h2cUuZdP/AKZipV8yTygZ+Du7FrGepYfgCjkPlCFPhgHIfKRyr+Ko6Gsnc22eSU+ztToRCmEwldNCpcems9QTAjoJKuFHQfKZk3Ls1FqL0ee0aNU7Um95BxLs1iKy28IHNb7+89NGHHQTpo+QklFp2jofPlHE8aHAq+H/APab53E6vEqyaNTBHQgT2B6F9CBA/EOCUmBJsv0EquT6jlkpf6sy3Z/tDQBtURkJOhBJX36TZpXVlDIwZTzGoMxHEeDAE5EVvM5gIIoY3FYZiRSGS+oBYgj5mXjTXw55Tle9nqeHxC50zMQrEo1rXuw8IPkTYTvFMMwDGmxO9vvL5ecwmH4pRxSlM5pOd1JA18rw1hq+OoIAQldRs2ocry1BIMJRoUZX6NHwrHvVpIHsrgZWU6EFTYHKfYytQYKjNnWweoDyIs7bwLie1VJkZHpvTqWOUOLAvyIY2PuJn8JxmrTuUrVBdidTmBvqbg+Em95nRpWh64oGvWZSWVy+UoGYNduVh1gIYg52DBkGcZWcqEOZsrAlh4SC3M7X2tC1fAI2Hr4nKzhnQ5O87tA+YXIVVAygsWO+nTeC+zmCpmlihWFFS2VqdXKbU2BLEK1rhToNSJqkkZ7ZDwPhCY6riL1ilRDmTLZlennIY3uNrpsftX5Q5T7I1wQuanl+9mbbmbWuT+7xnZLhzVK6VxWAWkMrKga9UAtYM1gCPEeptpPQGQeY9Jic6dFocdq2DsHgVpIqLc5eZ3JJuT842tp85cqeRgriDkFRfcycpfi6LccPyQSp1wBfYdZIuJVtmBMr4YqxsQCF0F/tN19oQr4RTTZrAEa3A2koR1otyNXszHGWzOEB+I2Pko3+kv4Wk1haw/SD8FepUZunh9/tflCtKk5JC5dNy21+giSbY3pUWEpONdDCGFqDKfLcSHDs6WFRRY6B1+G/Q9IK7Y8R/h6Lup1Iso/nOglYxaIS32ZjH4o4zHFRrTw59mqbE+23zmxw1FgOky/Y7hjJSWw8dQ52J8+s2mHwNUC4KPb7NspPoesHFyeh3jHYqYKkX/Z85bxNYKhJ00nEAdb/APKkcpme0+LcoUTUn4iOS/5m4RfSIzkkrZkuIdsH7x+7+C9l8wNL++/vFI/4L+UfKKdOEfhy5v6avB8DReVz5wzRwajYCSIJMpkG2+yqSXQ6nSAk6KJGGnQ8VG8iwCJ0NIA873kKFkWA0cGlXMZwv+x+9IUGRbLyKtjEXdtem5+Uo4ym7oyo/dkjRgMxHnqR++cBrgsXT5U6w6qcjn+1zb/7RpITk/Qdq8RJ0VbeZ1Py2lRiW1Yknz/IcpQHEMulRHpn+dSB7Nsfa8u0qqt8JB9DGsV0Zbk+xNSvyEacIvMfl/iWA84asG2JJewPj+zGHqqQ6AEjRhoynqDsYHPZrEUB/psZUH8r2yn5aTVmp0+kYysf3b/mFP6bTXwxNTjOJRSmLoiqv31VSbea2sZXw2DStc0DY81Q5SvkU5Tdjhyt8Q/ftvOP2eonUJlbk6Eo3zW0z/kUfRtcbl2zDnAYlPCtQqLg2I0JGoJF9ZJQ4NmIaqxc3vr8IP8ATtDeP4fiKeqOKqg3yVPit0Di31BgU9pUptkr0KtM9UIdbcjsJaHJGSI8nFKLNZw3E5BlIUKNAFUC3sJfOIB5i/TnAHCu0mDewFXKx2DjKf8AEPVqQYA7i1wR+sxKEW9I3GcktuyGq/SAOOYnKFbo1vKxBhaqCvmPqIC41hu8Qj93k3x/S0eatjcPxll2II3sf3pDA7Vp3TLqGI2b8jznnj0KqGwIYeeh/wAyriHqkWyW8yY1xNdFHz8cuz0DgmPVUvza587k3hvAcRpmy5gv9Wl/eea8HxpChWPiXQ+Y5GGaeJvJ4uLLJxmrPWHs1E7be0827W4pamJpUX1VLu46mwyg/WE+EcSyI2Z7JbxAnTT8J57xXHs9Zq50DPf0XYfSVVy69HNKoSp7tnoGG4vl2UEHoSDNVwPi6P4c1m+62h9jsZ5PhcZcDWGeG4vKwPnJrKJeUYSRvMZiQiu/VjbzsB+cypYkljz1kvE+JZyqbBTcjqTKrVNLX/f5zq446s8zmlbxXojYjqIpXv5GclLIGuSoR8Q9xqPlvLFNwdjeQLJe7B3Hvz+c5TqJhHiQqhGzXHQ/rJ1B52gB206IgseBChWNC9Y4DpHCOJsL6AdToIUFjQkcqyFa+b4Bm8zovz3PtEcOW+Niw+6PCnuBqfcwYI4+LXVFBduaoLgf1MfCPS8DY7gD1GDo60CL+GkoIYm2r3AzbcgNzqZoUQAWAAA2A0A9o8LM0ayMhUoYyn8SrWUc0Nm/2N+TGMp8VQnK4ZG+64Kn5Nb6TbLTnK+BRxldFYdGAMabQqTM5QdW2IMdisR3a5spY3sAOvmeQ85ardlKe9NnpnoDmX/a23taVX4diaenhqL/AC72/pb9ZlspHRWwPGSWAqpkBNgy3qL7su3uIbNzoNfzlOnmA0oOW6BQB87wnQpVnFgBQXmRZqje+y/WLFPRRSrZRxSKn/qscx+Gmgz1G9FGw8zAeP7NPiiO9Ao01N1prZnbzd9h6C82lDAol8i6ndjqzH+ZjqY9lEWNdaE52qZ5viuw9NR4FK+Y1v5m+8jwVWvhbI4L0uupKielvQUgee8r1eHIRqARKRckQkl6My9RXUMpuDsRuIMxFO95p63Z2wLUWyncqRdSfygespQ2qoVP3l1X36SyaZN6M/VwZPKVH4dNgMMDtYjy2Mir4DS4m0jLkYHFcJvqLgjmJXXDYhdrGb9MKp1kNTBC8eCfYLmlH+JkkwlZxZ9F6DY+vWSvwYsLWmxp4QW2lijhh02jUEujMuSUtsxfCezLqbsxydP3tNJT4ciDwrr1O/1huigGkT0xHivgZyaqzO4ylz/5lKoSN+fP8DDmJpcoO7vy3/GFGGD7vyyzsn7uKGIWa1BJ0EhQyZTOU6iVRJBI1M61QDc+wgBKJ1mA+IgfvpIlLtt4R15yVKAGu56nWKwGrUY/Cth95vyWdGGBN3Jc+ew9F2EnAnQIANtHBY8LHhYwGBZIqToEcIAdVY+NvOgwCzsUaWizwCxzGcDmIrpcztM2iodnGvpeNAjna8SQoVjJNTXSMKR6ryjQCptYSvi8KHBDAGW0SPbKouxmqsRgqzjDVMjA5HOh+436QmgHsYJ7X1w97e3tGdnOIZ0yMfGv1E3xyvROUaLWJp5DYXsfpOAcjCeUNoYPqJZiCNtj1EsTaJKSaybJrG0JYYQERvT6SNW3Bk79ZUqLqGudIwK+NpE6gawa63vf1hiq0HVVAMAZUyzsm7sdIoCDCGSd4B5xRTiZ1Eihm3Nh5SzTpAbRRRDJlkiiKKaEPAjwIooAOEQiigMcJ2KKAHZ2KKAjjCcEUUAOlp1IooDOMI9ViiggHhZKqdYoppCI6te2ggjiOKIBiihIRiuJvcmBsNiDTcMvI6+YiimYikbrDYgOocc5LXTMLj4hOxTqREhpCwvtLa6iKKMCNhylWqZyKAiotfNccxICt7/WdimhEd/WKKKAH//Z',
      },
      {
        title: 'Why do we use it?',
        userFirstName: 'Michael',
        userLastName: 'Jordan',
        price: 2500,
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        imgPath:
          'https://www.anuncioemfoco.com.br/imagens/anuncios/070420012629/galeria_2630_5_quentinhas.jpg',
      },
      {
        title: 'Why do we use it?',
        userFirstName: 'Michael',
        userLastName: 'Jordan',
        price: 2500,
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
      },
      {
        title: 'Why do we use it?',
        userFirstName: 'Michael',
        userLastName: 'Jordan',
        price: 2500,
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
      },
      {
        title: 'Why do we use it?',
        userFirstName: 'Michael',
        userLastName: 'Jordan',
        price: 2500,
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
      },
    ];
  }
}
