# Git Crypt with GPG


### Installation

```
brew install git-crypt
brew install gnupg
```


### Initialize

```
git-crypt init
```

Create ```.gitattributes``` file and add the file details in the below format

```
[file-name] attribute1=value1 attribute2=value2
```

#### Example:
 
``` 
secrets.txt filter=git-crypt diff=git-crypt
```

To add a specific path, use the below format

```
secret_dir/** filter=git-crypt diff=git-crypt
```

To check the encryption

```
git-crypt status -e
```


Use the below command to ***export the encryption key***

```
git-crypt export-key path/where/key/should/be/saved
```

After exporting pass the key to team members safely.

Now, the team members can ***decrypt*** the file using the below command

```
git-crypt unlock path/to/key
```


### GPG key

First, the person we want to authorize needs to create their own GPG key. While creating it, they will be asked to enter an e-mail address:

```
gpg --gen-key
```

After that, they need to list the keys and copy the key ID:

```
gpg --list-keys
```

After that, they need to list the keys and copy the key ID:

```
gpg --list-keys
```

Export the GPG public key

```
gpg --export --armor <your_email@example.com> > public_key.gpg

```
Share these public key files among your team members.

Add the trusted ***GPG public keys*** to your git-crypt configuration:

```
git-crypt add-gpg-user <public_key.gpg>
```

Now, the team members can ***unlock*** the files using below command

```
git-crypt unlock
```
