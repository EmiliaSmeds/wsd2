# 1️⃣ CREATE – RResource (Sequence Diagram)

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as Frontend (form.js and resources.js)
    participant B as Backend (Express Route)
    participant V as express-validator
    participant S as Resource Service
    participant DB as PostgreSQL

    U->>F: Submit form
    F->>F: Client-side validation
    F->>B: POST /api/resources (JSON)

    B->>V: Validate request
    V-->>B: Validation result

    alt Validation fails
        B-->>F: 400 Bad Request + errors[]
        F-->>U: Show validation message
    else Validation OK
        B->>S: create Resource(data)
        S->>DB: INSERT INTO resources
        DB-->>S: Result / Duplicate error

        alt Duplicate
            S-->>B: Duplicate detected
            B-->>F: 409 Conflict
            F-->>U: Show duplicate message
        else Success
            S-->>B: Created resource
            B-->>F: 201 Created
            F-->>U: Show success message
        end
    end
```

# 2️⃣ READ — Resource (Sequence Diagram)

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as Frontend (form.js and resources.js)
    participant B as Backend (Express Route)
    participant V as express-validator
    participant S as Resource Service
    participant DB as PostgreSQL

    U->>F: Select, reload webpage
    F->>F: Client-side validation
    F->>B: GET /api/resources (JSON)

    B->>V: Validate request
    V-->>B: Validation result

    alt Validation fails
        B-->>F: 404 Not found + errors[]
        F-->>U: Show validation message
    else Validation OK
        B->>DB: get resource
        DB->>F: get reseource
        F->>U: Show resource

alt Validation fails
        B-->>F: 404 Not found + errors[]
        F-->>U: Show validation message
    else Validation OK
        S-->>B: Show resource
        B-->>F: 304 OK
        F-->>U: Show resource
        end
    end
```

# 3️⃣ UPDATE — Resource (Sequence Diagram)

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as Frontend (form.js and resources.js)
    participant B as Backend (Express Route)
    participant V as express-validator
    participant S as Resource Service
    participant DB as PostgreSQL

    U->>F: Update resource
    F->>F: Client-side validation
    F->>B: PUT /api/resources/1 (JSON)

    B->>V: Validate request
    V-->>B: Validation result


    alt Validation fails
        B-->>F: 400 Bad Request + errors[]
        F-->>U: Show validation message
    else Validation OK
        B->>S: Update resource(data)
        S->>DB: PUT INTO resources
        DB-->>S: Result / duplicate


        alt Duplicate
            S-->>B: Duplicate detected
            B-->>F: 409 Conflict
            F-->>U: Show duplicate message
        else Success
            S-->>B: Updated resource
            B-->>F: 200 OK
            F-->>U: Show success message

        end
    end
```

# 4️⃣ DELETE — Resource (Sequence Diagram)

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as Frontend (form.js and resources.js)
    participant B as Backend (Express Route)
    participant V as express-validator
    participant S as Resource Service
    participant DB as PostgreSQL

    U->>F: delete resource
    F->>F: Client-side validation
    F->>B: DELETE /api/resources/1 (JSON)

    B->>V: Validate request
    V-->>B: Validation result


    alt Validation fails
        B-->>F: 403 Not authorized + errors[]
        F-->>U: Show validation message
    else Validation OK
        B->>S: Delete resource(data)
        S->>DB: DELETE FROM resources
        DB-->>S: Result / not found error

        alt NotFound
            S-->>B: Resource not found
            B-->>F: 404 error
            F-->>U: Show a not found message
        else Success
            S-->>B: delete resource
            B-->>F: 204 OK
            F-->>U: Show success message
        end
    end
```
