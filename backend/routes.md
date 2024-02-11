# CoogTree API Routes

### ``/singnup``

```json
    {
        "full_name": string, 
        "email": string, 
        "password": string,
    }
```

Creates a new user. 

### ``/login``

```json
    {
        "email": string, 
        "password": string,
    }
```

Logs in new user by checking credentials. 

### ``/setinfo``

```json
    {
        "email": string,
        "majors": [], 
        "terms": [],
        "classes": {
            ..., 
            "<class_code>": "<prof_name>"
            ..., 
        },
        "instagram": string, 
        "discord": string, 
    }
```

Sets initial user info like major, terms, and classes. 

### ``/addclass``

```json
{
    "email": string, 
    "class_code": string,
    "prof": string, 
}
```

Adds a new class to the user's profile and adds student to the course list. 

### ``/getclassmates``


```json
{
    "email": string, 
    "class_code": string,
    "prof": string, 
}
```

Retrieves all students from a course list under the
same professor.