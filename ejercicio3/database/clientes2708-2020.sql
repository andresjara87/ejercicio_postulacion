PGDMP         7    
            x            clientes    12.1    12.1     �
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                        0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    88503    clientes    DATABASE     �   CREATE DATABASE clientes WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Chile.1252' LC_CTYPE = 'Spanish_Chile.1252';
    DROP DATABASE clientes;
                postgres    false            �            1259    88504    clientes    TABLE     �   CREATE TABLE public.clientes (
    idcliente integer,
    nombre character varying(200) NOT NULL,
    apellido character varying(200) NOT NULL,
    cuenta character varying(200) NOT NULL
);
    DROP TABLE public.clientes;
       public         heap    postgres    false            �
          0    88504    clientes 
   TABLE DATA           G   COPY public.clientes (idcliente, nombre, apellido, cuenta) FROM stdin;
    public          postgres    false    202          �
      x������ � �     