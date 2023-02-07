#!/bin/bash

expected_version="v$(cat .nvmrc)"
installed_version=$(node -v)

if [ "$expected_version" != "$installed_version" ]; then
  echo "Node version expected was $expected_version, but got $installed_version"
  exit 1
fi
